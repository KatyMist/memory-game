import { createElement } from '../utils/create-element.js';

const SCROLL_LOCK_CLASS = 'scroll-lock';

/**
 * Общий компонент модального окна на основе <dialog>.
 * Оболочка, открытие и закрытие описаны здесь один раз,
 * а содержимое передаётся отдельно для каждого окна в open().
 *
 * Закрывается кнопкой (через close), клавишей Escape и кликом по затемнённому фону.
 * Пока окно открыто, прокрутка страницы заблокирована, а элементы под ним недоступны.
 */
export function createModal() {
  const content = createElement('div', { className: 'modal__content' });
  const dialog = createElement('dialog', { className: 'modal', children: [content] });

  // Клик по фону: и нажатие, и отпускание должны быть на самом <dialog>,
  // иначе выделение текста мышью с выходом за окно закрывало бы его.
  let pressedOnBackdrop = false;

  dialog.addEventListener('pointerdown', (event) => {
    pressedOnBackdrop = event.target === dialog;
  });

  dialog.addEventListener('click', (event) => {
    if (pressedOnBackdrop && event.target === dialog) close();
    pressedOnBackdrop = false;
  });

  function unlockScroll() {
    document.body.classList.remove(SCROLL_LOCK_CLASS);
  }

  // Срабатывает при любом способе закрытия, включая Escape
  dialog.addEventListener('close', unlockScroll);

  /**
   * @param {Node[]} children - содержимое окна
   * @param {string} label - доступное название окна
   */
  function open(children, label) {
    content.replaceChildren(...children);
    dialog.setAttribute('aria-label', label);

    if (!dialog.open) {
      document.body.classList.add(SCROLL_LOCK_CLASS);
      dialog.showModal();
    }
  }

  function close() {
    if (!dialog.open) return;
    dialog.close();
    unlockScroll();
  }

  return { element: dialog, open, close };
}
