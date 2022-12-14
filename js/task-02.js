const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsRef = document.querySelector('#ingredients');

const ingredientsArray = [];

ingredients.map((ingredient) => {
  const ingredientRef = document.createElement('li');
  ingredientRef.textContent = ingredient;
  ingredientRef.classList.add('item');
  ingredientsArray.push(ingredientRef);
  return ingredientsArray;
});

ingredientsRef.append(...ingredientsArray);