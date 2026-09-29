import { createElement } from './utils/create-element.js';
import { CARD_IMAGES } from './data/cards.js';
import { createHeader } from './components/header.js';
import { createStats } from './components/stats.js';
import { createBoard } from './components/board.js';
import { createModal } from './components/modal.js';
import { createWinContent } from './components/win-content.js';
import { createGame } from './game/game.js';

function initApp() {
  const stats = createStats(CARD_IMAGES.length);
  const board = createBoard();
  const modal = createModal();

  function startNewGame() {
    modal.close();
    game.start();
  }

  function showWin(moves) {
    const content = createWinContent({
      moves,
      onNewGame: startNewGame,
      onClose: modal.close,
    });
    modal.open(content, 'Победа');
  }

  const game = createGame({
    images: CARD_IMAGES,
    board,
    stats,
    onWin: showWin,
  });

  const header = createHeader({
    statsElement: stats.element,
    onNewGame: startNewGame,
    onLeaderboard: () => console.log('Таблица лидеров'),
  });

  const main = createElement('main', {
    className: ['main', 'container'],
    children: [board.element],
  });

  document.body.append(header, main, modal.element);
  game.start();
}

initApp();
