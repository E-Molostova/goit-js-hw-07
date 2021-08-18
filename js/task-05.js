// Напиши скрипт который, при наборе текста
// в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name -
// output.Если инпут пустой, в спане должна
// отображаться строка 'незнакомец'.

const inputForm = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');
console.log(inputForm);
console.log(userName);

inputForm.addEventListener('input', changeNameFn);

function changeNameFn() {
  if (inputForm.value !== '') {
    userName.textContent = inputForm.value;
  } else {
    userName.textContent = 'незнакомец';
  }
}
