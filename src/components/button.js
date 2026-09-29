import { createElement } from '../utils/create-element.js';
import { createIcon } from './icon.js';

/**
 * Кнопка приложения. variant: 'primary' | 'outline'. icon — имя иконки (необязательно).
 */
export function createButton({ text, variant = 'primary', icon, onClick }) {
  const children = icon ? [createIcon(icon), createElement('span', { text })] : [text];

  const button = createElement('button', {
    className: ['button', `button--${variant}`],
    attrs: { type: 'button' },
    children,
  });

  if (onClick) button.addEventListener('click', onClick);

  return button;
}
