const INIT = {};
const ADD_RECIPE_DETAILS = 'ADD_RECIPE_DETAILS';
const CLEAR_RECIPE_DETAILS = 'CLEAR_RECIPE_DETAILS';

const recipeDetails = (state = INIT, action) => {
  if (action.type === ADD_RECIPE_DETAILS) return action.payload;
  if (action.type === CLEAR_RECIPE_DETAILS) return INIT;
  return state;
};

export default recipeDetails;
