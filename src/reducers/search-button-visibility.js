const INIT = true;
const HIDE_SEARCH_BTN = 'HIDE_SEARCH_BTN';
const DISPLAY_SEARCH_BTN = 'SHOW_SEARCH_BTN';

const searchButtonVisibility = (state = INIT, action) => {
  if (action.type === HIDE_SEARCH_BTN) return false;
  if (action.type === DISPLAY_SEARCH_BTN) return INIT;
  return state;
};

export default searchButtonVisibility;
