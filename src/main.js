import { createElement } from './utils/create-element.js';
import { CARD_IMAGES } from './data/cards.js';
import { createHeader } from './components/header.js';
import { createStats } from './components/stats.js';
import { createBoard } from './components/board.js';
import { createGame } from './game/game.js';

function initApp() {
  const stats = createStats(CARD_IMAGES.length);
  const board = createBoard();

  const game = createGame({
    images: CARD_IMAGES,
    board,
    stats,
    onWin: (moves) => console.log(`Победа за ${moves} ходов`),
  });

  const header = createHeader({
    statsElement: stats.element,
    onNewGame: game.start,
    onLeaderboard: () => console.log('Таблица лидеров'),
  });

  const main = createElement('main', {
    className: ['main', 'container'],
    children: [board.element],
  });

  document.body.append(header, main);
  game.start();
}

initApp();
