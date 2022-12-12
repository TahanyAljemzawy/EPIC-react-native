import * as actionTypes from '../Types/index';

const initialState = {
  error: '',
  loading: false,
  roomsInfo: [],
  userIsLogin: false,
  roomData: [], //for the room he shoose
  reservationByDayData: [],
  timeLineLoading:false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ROOMS_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_ROOMS_DATA_SUCCESS:
      
      return {
        ...state,
        loading: false,
        roomsInfo: action.usersInfo,
      };
    case actionTypes.GET_ROOMS_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionTypes.SELECT_ROOM_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SELECT_ROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        roomData: action.roomData,
      };
    case actionTypes.SELECT_ROOM_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
      case actionTypes.SET_ROOM_DATA_LOADING:
        return {
          ...state,
          loading: true,
          error:'',
        };
      case actionTypes.SET_ROOM_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          error:'',
          roomsInfo:action.newRoomsInfo,   
            };
      case actionTypes.SET_ROOM_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
      case actionTypes.SEARCH_BY_DAY_LOADING:
        return {
          ...state,
          timeLineLoading:true,
         reservationByDayData:state.reservationByDayData,
        }
      case actionTypes.SEARCH_BY_DAY_SUCCESS:
        return {
          ...state,
          reservationByDayData: action.reservationData,
          error:'',
          timeLineLoading:false,
        }  
      case actionTypes.SEARCH_BY_DAY_FAILED:
        return {
          ...state,
          error:'Can\'t find the reservation for this day',
          timeLineLoading:false,
        }  
      case actionTypes.RESET_DETAILS_SCREEN:
        return {
          ...state,
          reservationByDayData:initialState.reservationByDayData,
        }  
    default:
      return state;
  }
};
