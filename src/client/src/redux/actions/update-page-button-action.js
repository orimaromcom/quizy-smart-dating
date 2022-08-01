import actionTypes from "./constants";
const updatePageButton = (pageButton) => ({
  type: actionTypes.UPDATE_PAGE_BUTTON,
  payload: pageButton,
});

export const updatePageButtonAction = (pageButton) => {
  return async (dispatch) => {
    dispatch(updatePageButton(pageButton));
  };
};
