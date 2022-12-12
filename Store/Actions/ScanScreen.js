import * as actionTypes from '../Types/index';

export const scanSuccess = (newLocation, navigation) => dispatch => {
  navigation.replace('MainStack')
    dispatch({
      type: actionTypes.SCAN_SUCCESS,
      location: newLocation,
    });
 };

export const checkOut = () => dispatch => {
  dispatch({
    type: actionTypes.CHECKOUT_SUCCESS,
  });
}