import { createElement } from '../utils/create-element.js';

/**
 * Панель счётчиков: число ходов и найденных пар.
 * Возвращает элемент и функцию update для обновления значений.
 */
export function createStats(totalPairs) {
  const movesValue = createElement('span', { className: 'stats__badge', text: '0' });
  const pairsValue = createElement('span', { className: 'stats__value', text: `0 из ${totalPairs}` });

  const element = createElement('div', {
    className: 'stats',
    attrs: { 'aria-live': 'polite' },
    children: [
      createElement('p', {
        className: 'stats__item',
        children: [createElement('span', { className: 'stats__label', text: 'Ходы:' }), movesValue],
      }),
      createElement('p', {
        className: 'stats__item',
        children: [
          createElement('span', { className: 'stats__label', text: 'Найдено пар:' }),
          pairsValue,
        ],
      }),
    ],
  });

  function update({ moves, pairs }) {
    movesValue.textContent = String(moves);
    pairsValue.textContent = `${pairs} из ${totalPairs}`;
  }

  return { element, update };
}
