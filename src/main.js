import { createElement } from './utils/create-element.js';
import { createDeck } from './utils/deck.js';
import { CARD_IMAGES } from './data/cards.js';
import { createHeader } from './components/header.js';
import { createStats } from './components/stats.js';
import { createBoard } from './components/board.js';

const TOTAL_PAIRS = CARD_IMAGES.length;

function initApp() {
  const stats = createStats(TOTAL_PAIRS);
  const board = createBoard();

  function startGame() {
    board.render(createDeck(CARD_IMAGES));
    stats.update({ moves: 0, pairs: 0 });
  }

  const header = createHeader({
    onNewGame: startGame,
    onLeaderboard: () => console.log('Таблица лидеров'),
  });

  const main = createElement('main', {
    className: ['main', 'container'],
    children: [stats.element, board.element],
  });

  document.body.append(header, main);
  startGame();
}

initApp();
