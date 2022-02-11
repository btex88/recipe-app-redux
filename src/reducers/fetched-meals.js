const INIT = [];
const ADD_MEALS = 'ADD_MEALS';
const CLEAR_MEALS = 'CLEAR_MEALS';

const fetchedMeals = (state = INIT, action) => {
  if (action.type === ADD_MEALS) return action.payload;
  if (action.type === CLEAR_MEALS) return INIT;
  return state;
};

export default fetchedMeals;
