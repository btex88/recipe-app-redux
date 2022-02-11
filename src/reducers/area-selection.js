const INIT = '';
const ADD_AREA = 'ADD_AREA';
const CLEAR_AREA_SELECTION = 'CLEAR_AREA_SELECTION';

const areaSelection = (state = INIT, action) => {
  if (action.type === ADD_AREA) return action.payload;
  if (action.type === CLEAR_AREA_SELECTION) return INIT;
  return state;
};

export default areaSelection;
