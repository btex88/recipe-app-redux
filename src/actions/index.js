const ADD_AREA = 'ADD_AREA';
const ADD_AREAS = 'ADD_AREAS';
const ADD_CATEGORIES = 'ADD_CATEGORIES';
const ADD_DRINKS = 'ADD_DRINKS';
const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
const ADD_MEALS = 'ADD_MEALS';
const ADD_RANDOM_RECIPE = 'ADD_RANDOM_RECIPE';
const ADD_RECIPE_DETAILS = 'ADD_RECIPE_DETAILS';
const CHECK_CATEGORY = 'CHECK_CATEGORY';
const CHECK_FILTER = 'CHECK_FILTER';
const CLEAR_AREA_SELECTION = 'CLEAR_AREA_SELECTION';
const CLEAR_DRINKS = 'CLEAR_DRINKS';
const CLEAR_INGREDIENTS = 'CLEAR_INGREDIENTS';
const CLEAR_MEALS = 'CLEAR_MEALS';
const CLEAR_RANDOM_RECIPE = 'CLEAR_RANDOM_RECIPE';
const CLEAR_RECIPE_DETAILS = 'CLEAR_RECIPE_DETAILS';
const CLEAR_RECIPE_STATUS = 'CLEAR_RECIPE_STATUS';
const DISPLAY_SEARCH_BAR = 'DISPLAY_SEARCH_BAR';
const DISPLAY_SEARCH_BTN = 'SHOW_SEARCH_BTN';
const DONT_RUN_API = 'DONT_RUN_API';
const FIRST_LETTER = 'FIRST_LETTER';
const HIDE_SEARCH_BAR = 'HIDE_SEARCH_BAR';
const HIDE_SEARCH_BTN = 'HIDE_SEARCH_BTN';
const INGREDIENT = 'INGREDIENT';
const NAME = 'NAME';
const RECIPE_DONE = 'RECIPE_DONE';
const RECIPE_IN_PROGRESS = 'RECIPE_IN_PROGRESS';
const RUN_API = 'RUN_API';
const UPDATE = 'UPDATE';

const addArea = (area) => ({ type: ADD_AREA, payload: area });
const addAreas = (areas) => ({ type: ADD_AREAS, payload: areas });
const addCategories = (categories) => ({ type: ADD_CATEGORIES, payload: categories });
const addDrinks = (drinks) => ({ type: ADD_DRINKS, payload: drinks });
const addIngredients = (ingredients) => ({ type: ADD_INGREDIENTS, payload: ingredients });
const addMeals = (meals) => ({ type: ADD_MEALS, payload: meals });
const addRandomRecipe = (recipe) => ({ type: ADD_RANDOM_RECIPE, payload: recipe });
const addRecipeDetails = (recipe) => ({ type: ADD_RECIPE_DETAILS, payload: recipe });
const checkCategory = (category) => ({ type: CHECK_CATEGORY, payload: category });
const checkFilter = (filter) => ({ type: CHECK_FILTER, payload: filter });
const checkFirstLetter = () => ({ type: FIRST_LETTER });
const checkIngredient = () => ({ type: INGREDIENT });
const checkName = () => ({ type: NAME });
const clearAreaSelection = () => ({ type: CLEAR_AREA_SELECTION });
const clearDrinks = () => ({ type: CLEAR_DRINKS });
const clearIngredients = () => ({ type: CLEAR_INGREDIENTS });
const clearMeals = () => ({ type: CLEAR_MEALS });
const clearRandomRecipe = () => ({ type: CLEAR_RANDOM_RECIPE });
const clearRecipeDetails = () => ({ type: CLEAR_RECIPE_DETAILS });
const clearRecipeStatus = () => ({ type: CLEAR_RECIPE_STATUS });
const displaySearchBar = () => ({ type: DISPLAY_SEARCH_BAR });
const displaySearchBtn = () => ({ type: DISPLAY_SEARCH_BTN });
const dontRunAPI = () => ({ type: DONT_RUN_API });
const hideSearchBar = () => ({ type: HIDE_SEARCH_BAR });
const hideSearchBtn = () => ({ type: HIDE_SEARCH_BTN });
const recipeDone = () => ({ type: RECIPE_DONE });
const recipeInProgress = () => ({ type: RECIPE_IN_PROGRESS });
const runAPI = () => ({ type: RUN_API });
const update = () => ({ type: UPDATE });

export {
  addArea,
  addAreas,
  addCategories,
  addDrinks,
  addIngredients,
  addMeals,
  addRandomRecipe,
  addRecipeDetails,
  checkCategory,
  checkFilter,
  checkFirstLetter,
  checkIngredient,
  checkName,
  clearAreaSelection,
  clearDrinks,
  clearIngredients,
  clearMeals,
  clearRandomRecipe,
  clearRecipeDetails,
  clearRecipeStatus,
  displaySearchBar,
  displaySearchBtn,
  dontRunAPI,
  hideSearchBar,
  hideSearchBtn,
  recipeDone,
  recipeInProgress,
  runAPI,
  update,
};
