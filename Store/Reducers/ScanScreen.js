import * as actionTypes from '../Types/index';

const initialState = {
  error: '',
  loading: false,
  loaction: {},
  checkinState:false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SCAN_LOADING:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case actionTypes.SCAN_SUCCESS:
        const newLocation = action.location
        return {
            ...state,
            loading:false,
            checkinState:true,
            location: {...state.location,newLocation }
        }
        case actionTypes.SCAN_FAILD:
            return {
                ...state,
                loading:false,
                checkinState:false,
                error:action.error
            }  
        case actionTypes.CHECKOUT_SUCCESS:
          return {
            ...state,
            loading:false,
            checkinState:false,
        }       
    default:
      return state;
  }
};
