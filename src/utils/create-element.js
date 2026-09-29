/**
 * Обёртка над document.createElement.
 *
 * @param {string} tag - имя тега
 * @param {object} [options]
 * @param {string | string[]} [options.className] - CSS-класс или список классов
 * @param {string} [options.text] - текстовое содержимое (через textContent)
 * @param {object} [options.attrs] - атрибуты: { type: 'button', 'aria-label': '...' }
 * @param {Array<Node | string>} [options.children] - дочерние элементы
 * @returns {HTMLElement}
 */
export function createElement(tag, { className, text, attrs = {}, children = [] } = {}) {
  const element = document.createElement(tag);

  if (className) {
    const classes = Array.isArray(className) ? className : [className];
    element.classList.add(...classes);
  }

  if (text !== undefined) {
    element.textContent = text;
  }

  Object.entries(attrs).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });

  element.append(...children);

  return element;
}
