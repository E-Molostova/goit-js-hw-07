// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться
// размер текста.

const changeTextRef = document.querySelector('#text');
const changeInputRef = document.querySelector('#font-size-control');

changeInputRef.addEventListener('input', changeHandler);

function changeHandler() {
  if (changeInputRef.value > 0) {
    console.log(Number(changeInputRef.value));
    changeTextRef.style.fontSize = `${Number(changeInputRef.value)}px`;
  }
}
