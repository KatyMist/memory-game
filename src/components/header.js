import { createElement } from '../utils/create-element.js';

/**
 * Хедер с кнопками «Новая игра» и «Таблица лидеров».
 * Обработчики передаются снаружи, чтобы компонент не знал о логике игры.
 */
export function createHeader({ onNewGame, onLeaderboard }) {
  const title = createElement('h1', { className: 'header__title', text: 'Memory Game' });

  const newGameButton = createElement('button', {
    className: ['button', 'button--primary'],
    text: 'Новая игра',
    attrs: { type: 'button' },
  });
  newGameButton.addEventListener('click', onNewGame);

  const leaderboardButton = createElement('button', {
    className: 'button',
    text: 'Таблица лидеров',
    attrs: { type: 'button' },
  });
  leaderboardButton.addEventListener('click', onLeaderboard);

  const actions = createElement('div', {
    className: 'header__actions',
    children: [newGameButton, leaderboardButton],
  });

  const inner = createElement('div', {
    className: ['header__inner', 'container'],
    children: [title, actions],
  });

  return createElement('header', { className: 'header', children: [inner] });
}
