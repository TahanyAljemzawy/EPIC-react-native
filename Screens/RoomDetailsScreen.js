import React, { useState } from 'react';
import {StyleSheet, Text, View, ActivityIndicator, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';

import Header from '../Components/Header';
import Colors from '../constants/Colors';
import TimeLine from '../Components/TimeLine';
import {
  searchByDay,
  resetDetailsScreen,
  fetchTimeLineData,
} from '../Store/Actions';
import ReservationCalendar from '../Components/ReservationCalendar';
import { strings } from '../Languages/i18ln';

const RoomsReservationScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const {error, loading, selectedRoom, resData, timeLineLoading} = useSelector(
    state => ({
      error: state.rooms.error,
      loading: state.rooms.loading,
      selectedRoom: state.rooms.roomData,
      resData: state.rooms.reservationByDayData,
      timeLineLoading: state.rooms.timeLineLoading,
    }),
  );
  useFocusEffect(
    React.useCallback(() => {
      dispatch(
        fetchTimeLineData(moment(new Date()).format('LL'), selectedRoom.id),
      );
      return () => {
        dispatch(resetDetailsScreen());
      };
    }, [navigation])
  );

  const [selectedDate, setSelectedDate] = useState(moment(new Date()))
//to transform data to work with time line{targee3 :P}
  const data = resData?.map(room => {
    return {
      title: room?.employeeName,
      time: room.startingTime+'-'+room.endingTime,
      description: room?.guestInvitations?.toString(),
    };
  });

  const visitReservationRoom = () => {
    navigation.navigate('ReservationScreen');
  };

  const selectDate = date => {
    setSelectedDate(date)
    dispatch(searchByDay(moment(date).format('LL')));
  };

  return (
    <View style={styles.sectionContainer}>
      <Header
        title={strings(selectedRoom.name)}
        back={true}
        nav={navigation}        
      />
      
      {loading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator color={Colors.primary} size="large" />
        </View>
        ) : (
        <>
        {/* Weeklky calendar */}
          <View style={styles.calendarContainer}>
          <ReservationCalendar selectDate={selectDate} selectedDate={selectedDate} />
          </View>
        {/* Time line */}  
          {timeLineLoading ? (
            <View style={styles.activityIndicator}>
              <ActivityIndicator color={Colors.secondary} size="large" />
            </View>
          ) : (
            <TimeLine data={data} />
          )}
          <TouchableOpacity style={styles.iconContainer} onPress={visitReservationRoom} >
          <Ionicons name="add-circle" style={styles.icon} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default RoomsReservationScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  activityIndicator: {
    position: 'absolute',
    top: '50%',
  },
  btnText: {
    fontWeight: '300',
    textTransform: 'capitalize',
    fontSize: 18,
    color: Colors.primary,
  },
  iconContainer:{
    alignItems:'center',
    padding:2,
    position: 'absolute',
    bottom: 20,
  },
  icon: {
    fontWeight: 'bold',
    fontSize: 60,
    color: Colors.primary,
  },
  title: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 22,
    color: Colors.primary,
    marginTop: 5,
  },
  btnsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 5,
  },
  btn: {
    borderColor: Colors.primary,
    borderRadius: 30,
    borderWidth: 2,
    overflow: 'hidden',
    height: 40,
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  calendarContainer: {
    width: '100%',
    height: '15%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
  },
  calenderStyle:{height: '100%',},
  highlightDateNumberStyle: { //style number we choose
    color: '#2E66E7',
    marginTop: 10,
    height: 35,
    width: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#2E66E7',
    fontSize: 22,
  },
  disabledNumber: {color: 'grey', paddingTop: 10},
  dateNumberStyle: {color: Colors.primary, paddingTop: 10},
});
