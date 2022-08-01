const getAppView = (state) => state.appView;

export const getIsLoading = (state) => getAppView(state).isLoading;
export const getIsError = (state) => getAppView(state).isError;
export const getPageButtonValue = (state) => getAppView(state).pageButtonValue