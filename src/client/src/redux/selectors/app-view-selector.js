const getAppView = (state) => state.appView;

export const getIsLoading = (state) => getAppView(state).isLoading;
export const getIsError = (state) => getAppView(state).isError;
export const getErrorMessage = (state) => getAppView(state).errorMessage;
export const getIsSuccess = (state) => getAppView(state).isSuccess;
export const getSuccessMessage = (state) => getAppView(state).successMessage;
export const getPageButtonValue = (state) => getAppView(state).pageButtonValue;
