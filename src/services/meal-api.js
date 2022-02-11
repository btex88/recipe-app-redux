// q === query
// val === value

const meal = {
  url: {
    area: (q) => `https://www.themealdb.com/api/json/v1/1/filter.php?a=${q}`,
    areas: () => 'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
    categories: () => 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
    category: (q) => `https://www.themealdb.com/api/json/v1/1/filter.php?c=${q}`,
    details: (id) => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    firstLetter: (q) => `https://www.themealdb.com/api/json/v1/1/search.php?f=${q}`,
    ingredient: (q) => `https://www.themealdb.com/api/json/v1/1/filter.php?i=${q}`,
    ingredientList: () => 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
    name: (q) => `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`,
    random: () => 'https://www.themealdb.com/api/json/v1/1/random.php',
  },

  area: (q = '') => fetch(meal.url.area(q)).then((val) => val.json()),
  areas: () => fetch(meal.url.areas()).then((val) => val.json()),
  categories: () => fetch(meal.url.categories()).then((val) => val.json()),
  category: (q = '') => fetch(meal.url.category(q)).then((val) => val.json()),
  details: (id) => fetch(meal.url.details(id)).then((val) => val.json()),
  firstLetter: (q = '') => fetch(meal.url.firstLetter(q)).then((val) => val.json()),
  ingredient: (q = '') => fetch(meal.url.ingredient(q)).then((val) => val.json()),
  ingredientList: (q = '') => fetch(meal.url.ingredientList(q)).then((val) => val.json()),
  name: (q = '') => fetch(meal.url.name(q)).then((val) => val.json()),
  random: () => fetch(meal.url.random()).then((val) => val.json()),
};

export default meal;
