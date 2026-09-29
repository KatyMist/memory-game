import { createDeck } from '../utils/deck.js';

/** Через сколько миллисекунд закрывается несовпавшая пара (по заданию 700–1500). */
export const MISMATCH_DELAY = 1000;

/**
 * Игровая логика: состояние партии и реакция на клики по карточкам.
 *
 * @param {object} options
 * @param {Array} options.images - набор изображений
 * @param {{ element: HTMLElement, render: Function }} options.board - игровое поле
 * @param {{ update: Function }} options.stats - счётчики
 * @param {(moves: number) => void} [options.onWin] - вызывается один раз после победы
 */
export function createGame({ images, board, stats, onWin = () => {} }) {
  const totalPairs = images.length;

  const state = {
    cards: new Map(), // uid -> карточка
    firstCard: null, // первая открытая карточка хода
    isLocked: false, // открыта несовпавшая пара — клики по полю запрещены
    isFinished: false,
    moves: 0,
    pairs: 0,
    timerId: null,
  };

  function updateStats() {
    stats.update({ moves: state.moves, pairs: state.pairs });
  }

  function start() {
    clearTimeout(state.timerId);

    const cards = board.render(createDeck(images));

    state.cards = new Map(cards.map((card) => [card.data.uid, card]));
    state.firstCard = null;
    state.isLocked = false;
    state.isFinished = false;
    state.moves = 0;
    state.pairs = 0;
    state.timerId = null;

    updateStats();
  }

  function canOpen(card) {
    return !state.isLocked && !state.isFinished && !card.isOpen() && !card.isMatched();
  }

  function handleMatch(first, second) {
    first.markMatched();
    second.markMatched();
    state.pairs += 1;
    updateStats();

    if (state.pairs === totalPairs) {
      state.isFinished = true;
      onWin(state.moves);
    }
  }

  function handleMismatch(first, second) {
    state.isLocked = true;

    state.timerId = setTimeout(() => {
      first.close();
      second.close();
      state.isLocked = false;
      state.timerId = null;
    }, MISMATCH_DELAY);
  }

  function handleCardClick(card) {
    if (!canOpen(card)) return;

    card.open();

    if (!state.firstCard) {
      state.firstCard = card;
      return;
    }

    const first = state.firstCard;
    state.firstCard = null;
    state.moves += 1;
    updateStats();

    if (first.data.id === card.data.id) {
      handleMatch(first, card);
    } else {
      handleMismatch(first, card);
    }
  }

  // Один обработчик на всё поле (делегирование событий)
  board.element.addEventListener('click', (event) => {
    const cardElement = event.target.closest('.card');
    if (!cardElement) return;

    const card = state.cards.get(cardElement.dataset.uid);
    if (card) handleCardClick(card);
  });

  return { start };
}
