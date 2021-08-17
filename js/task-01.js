const arrayOfCategories = document.querySelectorAll('.item');
const quantityOfCatefories = arrayOfCategories.length;
console.log(`В списке ${quantityOfCatefories} категории.`);

[...arrayOfCategories].forEach(item => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
});
