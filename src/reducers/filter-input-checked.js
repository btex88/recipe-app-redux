const INIT = '';
const CHECK_FILTER = 'CHECK_FILTER';

const filterInputChecked = (state = INIT, action) => {
  if (action.type === CHECK_FILTER) return action.payload;
  return state;
};

export default filterInputChecked;
