const INIT = [];
const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
const CLEAR_INGREDIENTS = 'CLEAR_INGREDIENTS';

const listIngredients = (state = INIT, action) => {
  if (action.type === ADD_INGREDIENTS) return action.payload;
  if (action.type === CLEAR_INGREDIENTS) return INIT;
  return state;
};

export default listIngredients;
