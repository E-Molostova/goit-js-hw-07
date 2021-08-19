// Счетчик состоит из спана и кнопок, которые должны увеличивать и
// уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится
// текущее значение счетчика.
// Создай функции increment и decrement для увеличения и
// уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление
// интерфейса

const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  counterValue: document.querySelector('#value'),
};

refs.decrementBtn.addEventListener('click', onDecrement);
refs.incrementBtn.addEventListener('click', onIncrement);

let count = 0;

function onDecrement() {
  count -= 1;
  refs.counterValue.textContent = count;
}

function onIncrement() {
  count += 1;
  refs.counterValue.textContent = count;
}
