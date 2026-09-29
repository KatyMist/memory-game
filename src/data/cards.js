/**
 * Набор изображений для карточек: 8 разных, каждое попадёт на поле дважды.
 * id — уникальный идентификатор, по нему сравниваются карточки.
 * color — пастельный фон лицевой стороны.
 * image — путь к иллюстрации; если null, показывается эмодзи symbol.
 */
export const CARD_IMAGES = [
  { id: 'fox', name: 'Лисёнок', symbol: '🦊', color: '#fbd5c8', image: null },
  { id: 'bunny', name: 'Зайчик', symbol: '🐰', color: '#e4dbfb', image: null },
  { id: 'raccoon', name: 'Енот', symbol: '🦝', color: '#d3ecd7', image: null },
  { id: 'panda', name: 'Панда', symbol: '🐼', color: '#d6e6fb', image: null },
  { id: 'owl', name: 'Совёнок', symbol: '🦉', color: '#fbecc6', image: null },
  { id: 'hedgehog', name: 'Ёжик', symbol: '🦔', color: '#f9d7e3', image: null },
  { id: 'penguin', name: 'Пингвин', symbol: '🐧', color: '#d2eef3', image: null },
  { id: 'bear', name: 'Медвежонок', symbol: '🐻', color: '#eee0d0', image: null },
];
