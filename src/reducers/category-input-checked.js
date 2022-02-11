const INIT = '';
const CHECK_CATEGORY = 'CHECK_CATEGORY';

const categoryInputChecked = (state = INIT, action) => {
  if (action.type === CHECK_CATEGORY) return action.payload;
  return state;
};

export default categoryInputChecked;
