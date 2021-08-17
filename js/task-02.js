const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');

const makeIngredientsList = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientRef = document.createElement('li');
    ingredientRef.textContent = ingredient;
    return ingredientRef;
  });
};

const itemsOfIngredients = makeIngredientsList(ingredients);
ingredientsListRef.append(...itemsOfIngredients);
