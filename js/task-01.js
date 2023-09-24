
// const categoriesList = document.querySelectorAll('ul#categories > li.item');


// categoriesList.forEach(category => {

//   const categoryName = category.querySelector('h2').textContent;
  

//   const categoryItems = category.querySelectorAll('ul > li');

//   console.log(`Категория: ${categoryName}`);
//   console.log(`Количество элементов: ${categoryItems.length}`);
// });




const categoriesList = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const elementsCount = category.querySelectorAll('ul li').length;
  
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});

