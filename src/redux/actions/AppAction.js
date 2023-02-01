import * as types from './types';

export const initApp = () => {
  return (dispatch: any) => {
    dispatch({
      type: types.INIT_APP,
      payload: {
        name: ''
      }
    });
  };
};

export const goToDetails = () => {
  return (dispatch: any) => {
    dispatch({
      type: types.GO_TO_DETAILS,
      payload: {
        name: 'Chintan'
      }
    });
  };
};
export const showLocationModal = (
  showLocation: boolean,
  openCount?: number
) => {
  return (dispatch: any) => {
    dispatch({
      type: types.SHOW_LOCATION_MODAL,
      payload: {
        showLocation,
        openCount
      }
    });
  };
};
