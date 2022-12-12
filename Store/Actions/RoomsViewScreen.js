import * as actionTypes from '../Types/index';
import {
  getRoomsData,
  getSelectedRoomData,
  setReservationData,
  searchReservationByDay,
} from '../Services/index';

export const fetchRoomsData = () => async dispatch => {
  dispatch({
    type: actionTypes.GET_ROOMS_DATA_LOADING,
  });
  try {
    const result = await getRoomsData();
    dispatch({
      type: actionTypes.GET_ROOMS_DATA_SUCCESS,
      usersInfo: result,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.GET_ROOMS_DATA_FAILED,
      error: err,
    });
  }
};

export const selectRoom = (id, navigation) => async dispatch => {
  
  dispatch({
    type: actionTypes.SELECT_ROOM_LOADING,
  });
  try {
    const res = await getSelectedRoomData(id);
    dispatch({
      type: actionTypes.SELECT_ROOM_SUCCESS,
      roomData: res,
    });
    navigation.navigate('RoomDetailsScreen');
  } catch (error) {
    dispatch({
      type: actionTypes.SELECT_ROOM_FAILED,
      error,
    });
  }
};

export const sendReservationInfo = (bookedData, navigation) => async (dispatch, getState)  => {
  const roomId = getState().rooms.roomData.id
  dispatch({
    type: actionTypes.SET_ROOM_DATA_LOADING,
  });

  try {
    const newData = await setReservationData(bookedData,roomId);
    dispatch({
      type: actionTypes.SET_ROOM_DATA_SUCCESS,
      newRoomsInfo: newData,
    });
    navigation.navigate('RoomDetailsScreen');
  } catch (error) {
    dispatch({
      type: actionTypes.SET_ROOM_DATA_FAILED,
      error,
    });
  }
};

export const searchByDay = (day) => (dispatch, getState) => {
  
  const roomsData = getState().rooms.roomsInfo;
  const roomId = getState().rooms.roomData.id
  const selected = roomsData.find(room => room.id === roomId);    
  const res = selected?.bookedData?.filter(resData => resData.date === day )
  dispatch({
    type: actionTypes.SEARCH_BY_DAY_LOADING,
  });
  try {
    const data = searchReservationByDay(day, roomId);
    dispatch({
      type: actionTypes.SEARCH_BY_DAY_SUCCESS,
      reservationData: res,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.SEARCH_BY_DAY_FAILED,
    });
  }
};

export const fetchTimeLineData = (day) =>  (dispatch, getState) => {
  
  const roomsData = getState().rooms.roomsInfo;
  const roomId = getState().rooms.roomData.id
  const selected = roomsData.find(room => room.id === roomId);    
  const res = selected?.bookedData?.filter(resData => resData.date === day )
 
  try {
    const data = searchReservationByDay(day, roomId);
    dispatch({
      type: actionTypes.SEARCH_BY_DAY_SUCCESS,
      reservationData: res,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.SEARCH_BY_DAY_FAILED,
    });
  }
};

export const resetDetailsScreen = () => dispatch => {
  dispatch({
    type: actionTypes.RESET_DETAILS_SCREEN,
  });
};
