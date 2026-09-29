import { shuffle } from './shuffle.js';

/**
 * Создаёт колоду: каждое изображение дважды, в случайном порядке.
 * У каждой карточки свой uid, чтобы различать две карточки одной пары.
 */
export function createDeck(images) {
  const pairs = images.flatMap((image) => [
    { ...image, uid: `${image.id}-1` },
    { ...image, uid: `${image.id}-2` },
  ]);

  return shuffle(pairs);
}
