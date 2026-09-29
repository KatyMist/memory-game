import { createElement } from '../utils/create-element.js';

/**
 * Игровое поле — контейнер для карточек.
 */
export function createBoard() {
  return createElement('section', {
    className: 'board',
    attrs: { 'aria-label': 'Игровое поле' },
  });
}
