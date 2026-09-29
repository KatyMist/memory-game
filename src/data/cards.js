/**
 * Набор изображений для карточек: 8 разных, каждое попадёт на поле дважды.
 * id — уникальный идентификатор, по нему сравниваются карточки.
 * color — пастельный фон лицевой стороны.
 * image — путь к иллюстрации; если null, показывается эмодзи symbol.
 */
export const CARD_IMAGES = [
  { id: 'fox', name: 'Лисёнок', symbol: '🦊', color: '#f5cfb4', image: './assets/cards/Fox.png' },
  { id: 'bunny', name: 'Зайчик', symbol: '🐰', color: '#d0bff8', image: './assets/cards/Hare.png' },
  { id: 'raccoon', name: 'Енот', symbol: '🦝', color: '#c2dfc2', image: './assets/cards/Raccoon.png' },
  { id: 'panda', name: 'Панда', symbol: '🐼', color: '#d6e6fb', image: null },
  { id: 'owl', name: 'Совёнок', symbol: '🦉', color: '#fbecc6', image: null },
  { id: 'hedgehog', name: 'Ёжик', symbol: '🦔', color: '#f9d7e3', image: null },
  { id: 'penguin', name: 'Пингвин', symbol: '🐧', color: '#a3ccf8', image: './assets/cards/Penguin.png' },
  { id: 'bear', name: 'Медвежонок', symbol: '🐻', color: '#eee0d0', image: null },
];
