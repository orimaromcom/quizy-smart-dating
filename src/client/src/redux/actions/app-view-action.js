import actionTypes from "./constants";

const showError = (errorMessage) => ({
  type: actionTypes.SHOW_ERROR,
  payload: errorMessage,
});

export const showErrorAction = (errorMessage) => {
  return async (dispatch) => {
    dispatch(showError(errorMessage));
  };
};

const showSuccess = (successMessage) => ({
  type: actionTypes.SHOW_SUCCESS,
  payload: successMessage,
});

export const showSuccessAction = (successMessage) => {
  return async (dispatch) => {
    dispatch(showSuccess(successMessage));
  };
};

const hideToaster = () => ({
  type: actionTypes.HIDE_TOASTER,
});

export const hideToasterAction = () => {
  return async (dispatch) => {
    dispatch(hideToaster());
  };
};
