import * as types from '../actions/types';

const initialState = {
  name: '',
  showLocation: false,
  openCount: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_APP:
    case types.GO_TO_DETAILS:
      return { ...state, ...action.payload };
    case types.SHOW_LOCATION_MODAL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
