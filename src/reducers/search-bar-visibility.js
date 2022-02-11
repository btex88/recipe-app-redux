const INIT = false;
const DISPLAY_SEARCH_BAR = 'DISPLAY_SEARCH_BAR';
const HIDE_SEARCH_BAR = 'HIDE_SEARCH_BAR';

const searchBarVisibility = (state = INIT, action) => {
  if (action.type === DISPLAY_SEARCH_BAR) return true;
  if (action.type === HIDE_SEARCH_BAR) return INIT;
  return state;
};

export default searchBarVisibility;
