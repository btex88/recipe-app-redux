// q === query
// val === value

const cocktail = {
  url: {
    categories: () => 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
    category: (q) => `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${q}`,
    details: (id) => `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    firstLetter: (q) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${q}`,
    ingredient: (q) => `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${q}`,
    ingredientList: () => 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
    name: (q) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${q}`,
    random: () => 'https://www.thecocktaildb.com/api/json/v1/1/random.php',

  },

  categories: () => fetch(cocktail.url.categories()).then((val) => val.json()),
  category: (q = '') => fetch(cocktail.url.category(q)).then((val) => val.json()),
  details: (id) => fetch(cocktail.url.details(id)).then((val) => val.json()),
  firstLetter: (q = '') => fetch(cocktail.url.firstLetter(q)).then((val) => val.json()),
  ingredient: (q = '') => fetch(cocktail.url.ingredient(q)).then((val) => val.json()),
  ingredientList: () => fetch(cocktail.url.ingredientList()).then((val) => val.json()),
  name: (q = '') => fetch(cocktail.url.name(q)).then((val) => val.json()),
  random: () => fetch(cocktail.url.random()).then((val) => val.json()),
};

export default cocktail;
