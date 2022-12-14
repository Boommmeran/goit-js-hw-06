const itemsRef = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemsRef.length}`);


itemsRef.forEach((item) => {
  const titleText = item.querySelector('h2').textContent;
  const numberOfElements = item.querySelectorAll('ul li').length;
  console.log(`Category: ${titleText}`);
  console.log(`Elements: ${numberOfElements}`);
});


