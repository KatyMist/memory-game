import { createElement } from '../utils/create-element.js';
import { createButton } from './button.js';

/**
 * Хедер: логотип, счётчики и кнопки «Новая игра» и «Таблица лидеров».
 * Обработчики передаются снаружи, чтобы компонент не знал о логике игры.
 */
export function createHeader({ statsElement, onNewGame, onLeaderboard }) {
  const brand = createElement('div', {
    className: 'header__brand',
    children: [
      createElement('img', {
        className: 'header__logo',
        attrs: { src: './assets/logo.svg', alt: '', width: '64', height: '45' },
      }),
      createElement('h1', { className: 'header__title', text: 'Memory Game' }),
    ],
  });

  const actions = createElement('div', {
    className: 'header__actions',
    children: [
      createButton({
        text: 'Новая игра',
        icon: 'refresh',
        variant: 'primary',
        onClick: onNewGame,
      }),
      createButton({
        text: 'Таблица лидеров',
        icon: 'trophy',
        variant: 'outline',
        onClick: onLeaderboard,
      }),
    ],
  });

  const inner = createElement('div', {
    className: ['header__inner', 'container'],
    children: [brand, statsElement, actions],
  });

  return createElement('header', { className: 'header', children: [inner] });
}
