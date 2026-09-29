/**
 * Набор изображений для карточек: 8 разных, каждое попадёт на поле дважды.
 * id — уникальный идентификатор, по нему сравниваются карточки.
 * color — пастельный фон лицевой стороны.
 * image — путь к иллюстрации; если null, показывается эмодзи symbol.
 * Иллюстрации сгенерированы с помощью ИИ.
 */
export const CARD_IMAGES = [
  { id: 'fox', name: 'Лисёнок', symbol: '🦊', color: '#f5cfb4', image: './assets/cards/Fox.png' },
  { id: 'bunny', name: 'Зайчик', symbol: '🐰', color: '#d0bff8', image: './assets/cards/Hare.png' },
  { id: 'raccoon', name: 'Енот', symbol: '🦝', color: '#c2dfc2', image: './assets/cards/Raccoon.png' },
  { id: 'panda', name: 'Панда', symbol: '🐼', color: '#d6e8be', image: './assets/cards/Panda.png' },
  { id: 'owl', name: 'Совёнок', symbol: '🦉', color: '#c5bbf8', image: './assets/cards/Owl.png' },
  { id: 'hedgehog', name: 'Ёжик', symbol: '🦔', color: '#f4c8a0', image: './assets/cards/Hedgehog.png' },
  { id: 'penguin', name: 'Пингвин', symbol: '🐧', color: '#a3ccf8', image: './assets/cards/Penguin.png' },
  { id: 'bear', name: 'Медвежонок', symbol: '🐻', color: '#bad9fa', image: './assets/cards/Bear.png' },
];
