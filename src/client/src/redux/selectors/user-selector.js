const getUser = (state) => state.user;

export const getUserId = (state) => getUser(state).id;
export const getUserEmail = (state) => getUser(state).email;
export const getUserName = (state) => getUser(state).userName;
export const getUserPicture = (state) => getUser(state).picture;
