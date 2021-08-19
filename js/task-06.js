// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его
// атрибуте data - length.
// Если введено подходящее количество, то border инпута
// становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', checkFn);

function checkFn(e) {
  if (e.target.value.length === Number(e.target.dataset.length)) {
    e.target.classList.add('valid');
    e.target.classList.remove('invalid');
    return;
  }
  e.target.classList.remove('valid');
  e.target.classList.add('invalid');
}
