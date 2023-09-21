
const categoriesList = document.querySelectorAll('ul#categories > li.item');


categoriesList.forEach(category => {

  const categoryName = category.querySelector('h2').textContent;
  

  const categoryItems = category.querySelectorAll('ul > li');

  console.log(`Категория: ${categoryName}`);
  console.log(`Количество элементов: ${categoryItems.length}`);
});






