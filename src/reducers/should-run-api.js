const INIT = true;
const RUN_API = 'RUN_API';
const DONT_RUN_API = 'DONT_RUN_API';

const shouldRunAPI = (state = INIT, action) => {
  if (action.type === RUN_API) return INIT;
  if (action.type === DONT_RUN_API) return false;
  return state;
};

export default shouldRunAPI;
