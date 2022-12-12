import * as actionTypes from '../Types/index';

const initialState = {
  error: '',
  loading: false,
  userTeam: {},
};

export default (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.LOADING_TEAM_DATA:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.TEAM_DATA_SUCESS_LOADING:
      return {
        ...state,
        userTeam: action.teamData,
        loading: false,
        error: '',
      };
    case actionTypes.TEAM_DATA_FAIL_LOADING:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
