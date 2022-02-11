import { combineReducers } from 'redux';

import areaSelection from './area-selection';
import areasList from './areas-list';
import categoryInputChecked from './category-input-checked';
import fetchedDrinks from './fetched-drinks';
import fetchedMeals from './fetched-meals';
import filterCategories from './filter-categories';
import filterInputChecked from './filter-input-checked';
import listIngredients from './list-ingredients';
import randomRecipe from './random-recipe';
import recipeDetails from './recipe-details';
import recipeStatus from './recipe-status';
import searchBarVisibility from './search-bar-visibility';
import searchButtonVisibility from './search-button-visibility';
import searchRadioChecked from './search-radio-checked';
import shouldRunAPI from './should-run-api';
import update from './update';

const rootReducer = combineReducers({
  areaSelection,
  areasList,
  categoryInputChecked,
  fetchedDrinks,
  fetchedMeals,
  filterCategories,
  filterInputChecked,
  listIngredients,
  randomRecipe,
  recipeDetails,
  recipeStatus,
  searchBarVisibility,
  searchButtonVisibility,
  searchRadioChecked,
  shouldRunAPI,
  update,
});

export default rootReducer;
