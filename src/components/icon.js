import { createElement } from '../utils/create-element.js';

/**
 * Декоративная иконка. Форма берётся из SVG-файла через CSS mask,
 * цвет — из currentColor, поэтому иконка перекрашивается вместе с текстом кнопки.
 */
export function createIcon(name) {
  return createElement('span', {
    className: ['icon', `icon--${name}`],
    attrs: { 'aria-hidden': 'true' },
  });
}
