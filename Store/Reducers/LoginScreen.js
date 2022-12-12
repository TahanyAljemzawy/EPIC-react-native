import * as actionTypes from '../Types/index';

const initialState = {
  error: '',
  loading: false,
  usersInfo: [],
  userIsLogin: false,
  userData: {},
  language: 'en',
  isRTL: false
};

export default (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.FETCH_USERS_INFO:
      return {
        ...state,
        usersInfo: action.usersInfo,
        error:'',
      };
    case actionTypes.CHECK_LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        error:'',
      };
    case actionTypes.CHECK_LOGIN:
      return {
        ...state,
        error: action.error,
        userIsLogin: true,
        loading: false,
        userData: action.userData,
        error:'',
      };
    case actionTypes.ON_LOGOUT:
      return {
        ...state,
        userIsLogin: false,
        error:''
      };
    case actionTypes.ON_LOGIN_FAILD:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionTypes.SWITCH_LANGUAGE:
      return {
        ...state,
        language: action.currentLanguage,
        isRTL: action.isRTL,
      }

    default:
      return state;
  }
};
