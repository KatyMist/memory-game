import { createElement } from './utils/create-element.js';
import { createHeader } from './components/header.js';
import { createStats } from './components/stats.js';
import { createBoard } from './components/board.js';

const TOTAL_PAIRS = 8;

function initApp() {
  const header = createHeader({
    onNewGame: () => console.log('Новая игра'),
    onLeaderboard: () => console.log('Таблица лидеров'),
  });

  const stats = createStats(TOTAL_PAIRS);
  const board = createBoard();

  const main = createElement('main', {
    className: ['main', 'container'],
    children: [stats.element, board],
  });

  document.body.append(header, main);
}

initApp();
