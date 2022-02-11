const INIT = { };
const ADD_RANDOM_RECIPE = 'ADD_RANDOM_RECIPE';
const CLEAR_RANDOM_RECIPE = 'CLEAR_RANDOM_RECIPE';

const randomRecipe = (state = INIT, action) => {
  if (action.type === ADD_RANDOM_RECIPE) return action.payload;
  if (action.type === CLEAR_RANDOM_RECIPE) return INIT;
  return state;
};

export default randomRecipe;
