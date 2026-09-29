import { createElement } from '../utils/create-element.js';

const CLOSED_LABEL = 'Закрытая карточка';

/**
 * Карточка: кнопка с рубашкой (back) и лицевой стороной (front).
 * Пока карточка закрыта, её содержимое скрыто и от экранных дикторов.
 */
export function createCard(cardData) {
  const front = createElement('span', {
    className: ['card__face', 'card__face--front'],
    text: cardData.symbol,
    attrs: { 'aria-hidden': 'true' },
  });

  const back = createElement('span', {
    className: ['card__face', 'card__face--back'],
    attrs: { 'aria-hidden': 'true' },
  });

  const inner = createElement('span', {
    className: 'card__inner',
    children: [front, back],
  });

  const element = createElement('button', {
    className: 'card',
    attrs: { type: 'button', 'aria-label': CLOSED_LABEL },
    children: [inner],
  });

  element.dataset.uid = cardData.uid;

  function open() {
    element.classList.add('card--open');
    element.setAttribute('aria-label', cardData.name);
  }

  function close() {
    element.classList.remove('card--open');
    element.setAttribute('aria-label', CLOSED_LABEL);
  }

  function markMatched() {
    element.classList.add('card--matched');
  }

  return { element, data: cardData, open, close, markMatched };
}
