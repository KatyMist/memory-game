import { createElement } from '../utils/create-element.js';
import { formatDate } from '../utils/format-date.js';
import { createButton } from './button.js';
import { createIcon } from './icon.js';

function createCell(tag, text, className) {
  return createElement(tag, { className, text });
}

function createTable(results) {
  const head = createElement('thead', {
    children: [
      createElement('tr', {
        children: [
          createCell('th', 'Место', 'leaderboard__place'),
          createCell('th', 'Ходы'),
          createCell('th', 'Дата'),
        ],
      }),
    ],
  });

  const rows = results.map((result, index) => {
    const place = index + 1;

    const placeBadge = createElement('span', {
      className: ['leaderboard__badge', `leaderboard__badge--${place <= 3 ? place : 'other'}`],
      text: String(place),
    });

    return createElement('tr', {
      children: [
        createElement('td', { className: 'leaderboard__place', children: [placeBadge] }),
        createCell('td', String(result.moves), 'leaderboard__moves'),
        createCell('td', formatDate(result.date), 'leaderboard__date'),
      ],
    });
  });

  return createElement('table', {
    className: 'leaderboard__table',
    children: [head, createElement('tbody', { children: rows })],
  });
}

/**
 * Содержимое окна таблицы лидеров: до 10 лучших результатов или сообщение об их отсутствии.
 */
export function createLeaderboardContent({ results, onClose }) {
  const icon = createElement('span', {
    className: 'modal__icon',
    children: [createIcon('trophy')],
  });

  const title = createElement('h2', { className: 'modal__title', text: 'Таблица лидеров' });

  const body =
    results.length > 0
      ? createTable(results)
      : createElement('p', {
          className: ['modal__text', 'leaderboard__empty'],
          text: 'Пока нет результатов. Сыграйте первую игру!',
        });

  const actions = createElement('div', {
    className: 'modal__actions',
    children: [createButton({ text: 'Закрыть', variant: 'outline', onClick: onClose })],
  });

  return [icon, title, createElement('div', { className: 'leaderboard', children: [body] }), actions];
}
