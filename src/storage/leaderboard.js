const STORAGE_KEY = 'memory-game-leaderboard';
const MAX_RESULTS = 10;

/**
 * Сортировка: меньше ходов — выше; при равенстве выше более ранняя игра.
 */
function compareResults(a, b) {
  return a.moves - b.moves || a.date - b.date;
}

function isValidResult(item) {
  return (
    item !== null &&
    typeof item === 'object' &&
    Number.isInteger(item.moves) &&
    item.moves > 0 &&
    Number.isFinite(item.date)
  );
}

/**
 * Возвращает сохранённые результаты (до 10 лучших), уже отсортированные.
 * Если данные в localStorage повреждены или недоступны — пустой список.
 */
export function getResults() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(isValidResult).sort(compareResults).slice(0, MAX_RESULTS);
  } catch {
    return [];
  }
}

/**
 * Добавляет результат завершённой игры и оставляет 10 лучших.
 * @param {number} moves - число ходов
 * @returns {Array<{ moves: number, date: number }>} обновлённый список
 */
export function addResult(moves) {
  const results = [...getResults(), { moves, date: Date.now() }]
    .sort(compareResults)
    .slice(0, MAX_RESULTS);

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
  } catch {
    // localStorage может быть недоступен (например, в приватном режиме) — игра продолжает работать
  }

  return results;
}
