import { createElement } from '../utils/create-element.js';
import { plural } from '../utils/plural.js';
import { createButton } from './button.js';

/**
 * Содержимое окна победы: сообщение, число ходов, кнопки «Новая игра» и «Закрыть».
 */
export function createWinContent({ moves, onNewGame, onClose }) {
  const picture = createElement('img', {
    className: 'modal__picture',
    attrs: { src: './assets/logo.svg', alt: '', width: '120', height: '84' },
  });

  const title = createElement('h2', { className: 'modal__title', text: 'Победа!' });

  const text = createElement('p', {
    className: 'modal__text',
    text: 'Все пары найдены за',
  });

  const result = createElement('p', {
    className: 'modal__result',
    children: [
      createElement('span', { className: 'modal__result-value', text: String(moves) }),
      createElement('span', { text: plural(moves, ['ход', 'хода', 'ходов']) }),
    ],
  });

  const actions = createElement('div', {
    className: 'modal__actions',
    children: [
      createButton({ text: 'Новая игра', icon: 'refresh', variant: 'primary', onClick: onNewGame }),
      createButton({ text: 'Закрыть', variant: 'outline', onClick: onClose }),
    ],
  });

  return [picture, title, text, result, actions];
}
