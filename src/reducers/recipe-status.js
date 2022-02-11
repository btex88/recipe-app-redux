const INIT = '';
const RECIPE_DONE = 'RECIPE_DONE';
const RECIPE_IN_PROGRESS = 'RECIPE_IN_PROGRESS';
const CLEAR_RECIPE_STATUS = 'CLEAR_RECIPE_STATUS';

const recipeStatus = (state = INIT, action) => {
  if (action.type === RECIPE_DONE) return 'done';
  if (action.type === RECIPE_IN_PROGRESS) return 'progress';
  if (action.type === CLEAR_RECIPE_STATUS) return INIT;
  return state;
};

export default recipeStatus;
