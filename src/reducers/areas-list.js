const INIT = [];
const ADD_AREAS = 'ADD_AREAS';

const areasList = (state = INIT, action) => {
  if (action.type === ADD_AREAS) return action.payload;
  return state;
};

export default areasList;
