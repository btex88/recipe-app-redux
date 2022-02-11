const INIT = [];
const ADD_CATEGORIES = 'ADD_CATEGORIES';

const filterCategories = (state = INIT, action) => {
  if (action.type === ADD_CATEGORIES) return action.payload;
  return state;
};

export default filterCategories;
