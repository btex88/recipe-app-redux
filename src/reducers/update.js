const INIT = false;
const UPDATE = 'UPDATE';

const update = (state = INIT, action) => {
  if (action.type === UPDATE) return !state;
  return state;
};

export default update;
