import actionTypes from "../actions/constants";

const initialState = {
  users: [{userId : 1}] 
};

const usersEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case  actionTypes.FETCH_USERS: 
      return {
         ...state,
        users: [...users], 
      };

    default:
      return state;
  }
};

export default usersEntitiesReducer;
