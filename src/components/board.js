import { createElement } from '../utils/create-element.js';
import { createCard } from './card.js';

/**
 * Игровое поле — контейнер для карточек.
 * render(deck) заменяет карточки на новые и возвращает их список.
 */
export function createBoard() {
  const element = createElement('section', {
    className: 'board',
    attrs: { 'aria-label': 'Игровое поле' },
  });

  function render(deck) {
    const cards = deck.map((cardData) => createCard(cardData));
    element.replaceChildren(...cards.map((card) => card.element));
    return cards;
  }

  return { element, render };
}
