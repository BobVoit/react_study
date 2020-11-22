import { authAPI } from '../api/api'; 

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
      case SET_USER_DATA: {
        return {
          ...state,
          userId: action.data.id,
          email: action.data.email,
          login: action.data.login,
          isAuth: true
        }
      }
      default:
          return state;
    }
}


export const setAuthUserData = (data) => ({ type: SET_USER_DATA, data });


export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then(response => { 
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(response.data.data));
    }
  });
}


export default authReducer;