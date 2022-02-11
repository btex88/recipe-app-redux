const INIT = [];
const ADD_DRINKS = 'ADD_DRINKS';
const CLEAR_DRINKS = 'CLEAR_DRINKS';

const fetchedDrinks = (state = INIT, action) => {
  if (action.type === ADD_DRINKS) return action.payload;
  if (action.type === CLEAR_DRINKS) return INIT;
  return state;
};

export default fetchedDrinks;
