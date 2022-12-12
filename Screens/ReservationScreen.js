import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {sendReservationInfo} from '../Store/Actions';
import Header from '../Components/Header';
import Colors from '../constants/Colors';
import {useSelector, useDispatch} from 'react-redux';
import ReservationCard from '../Components/ReservationCard';
import { strings } from '../Languages/i18ln';



const ReservationScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const {
    error,
    loading,
    selectedRoom,
    userData,
    usersData,
  } = useSelector(state => ({
    error: state.rooms.error,
    loading: state.rooms.loading,
    selectedRoom: state.rooms.roomData,
    userData: state.user.userData,
    usersData: state.user.usersInfo,
  }));

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [query, setQuery] = useState('');
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [usersEmails, setUsersEmails] = useState([]);
  const [bookedData, setBookedData] = useState({
    employeeName: userData.fullname,
    duration: 0,
    date: '',
    startingTime: '',
    endingTime: '',
    guestInvitations: [],
  });
  const [tempStartTime, setTempStartTime] = useState('');
  const [tempEndTime, setTempEndTime] = useState('');

  useEffect(() => {
    setUsersEmails(usersData.map(userData => userData.email));
    //to Clean up the state
    const unsubscribe = navigation.addListener('blur', () => {
      setBookedData({
        employeeName: userData.fullname,
        duration: 0,
        date: '',
        startingTime: '',
        endingTime: '',
        guestInvitations: [],
      });
      setUsersEmails(usersData.map(userData => userData.email));
    });
    return unsubscribe; //remove listener after unmount the component
  }, [navigation]);

  //to handel the date btn and set the time and date
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleDateConfirm = date => {
    if(moment(date).format('LT') !== bookedData.endingTime)
      setBookedData({
        ...bookedData,
        date: moment(date).format('LL'),
        startingTime: moment(date).format('LT'),
      });
    else
      alert('Please choose another time');
      setTempStartTime(date);
      hideDatePicker();
  };
  //to handel the time btn and set the time and date
  const showEndTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const hideEndTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const handleEndTimeConfirm = date => {
    if(moment(date).format('LT') !== bookedData.startingTime)
    setBookedData({
      ...bookedData,
      endingTime: moment(date).format('LT'),
    });
    else
    alert('Please choose another time');
    setTempEndTime(date);
    hideEndTimePicker();
  };
//Maybe no need for this method it find the duration of the meeting
const findDuration = (tEndTime, tStartTime) => {  
    let hDuration =
    Math.abs(
      parseInt(moment(tEndTime).format('H')) -
        parseInt(moment(tStartTime).format('H')),
    ) * 60;
  let mDuration = Math.abs(
    parseInt(moment(tEndTime).format('m')) -
      parseInt(moment(tStartTime).format('m')),
  );
  const fullDuration = mDuration + hDuration; 
  setBookedData({...bookedData, duration:fullDuration})   
  return fullDuration;
};

  const sendReservationData = () => {
      dispatch(sendReservationInfo({...bookedData,
          duration:findDuration(tempEndTime, tempStartTime),          
        }, navigation));
  };
//to find the email for the auto complete
  const findEmail = query => {
    if (query) {
      const queryLC = query.trim().toLowerCase();
      setFilteredEmails(
        usersEmails.filter(email => email.search(queryLC) >= 0),
      );
    } else {
      setFilteredEmails([]);
    }
  };
//select email from the autocomplete emails
  const selectEmail = email => {
    setBookedData({...bookedData, guestInvitations: [...bookedData.guestInvitations.concat(email)]});
    setUsersEmails(usersEmails.filter(userEmail => email !== userEmail));//to remove the chosen email from the list
    setFilteredEmails([]);
    setQuery('');    
  };
//delete selected email from emails container
  const deleteEmail = (deletedEmail) => {
    setBookedData({...bookedData, guestInvitations: [...bookedData.guestInvitations.filter(email => email !== deletedEmail)]})
    setUsersEmails(usersEmails.concat(deletedEmail));//to add the deleted email to the listt again
  };

  const test = text => {
    setQuery(text);
    findEmail(text);
  };
  return (
    <>
      <Header
        title={strings('headersName.reservationCard')}
        back={true}
        nav={navigation}
        color={Colors.primary}
      />

      <View style={styles.sectionContainer}>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              minimumDate={new Date()}
              
              mode="datetime"
              onConfirm={handleDateConfirm}
              onCancel={hideDatePicker}
              display="spinner"
              minuteInterval={15} 
            />
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleEndTimeConfirm}
              onCancel={hideEndTimePicker}
              display="spinner"
              minuteInterval={15} 
            />
          <ReservationCard 
            bookedData={bookedData} 
            deleteEmail={deleteEmail}
            sendReservationData={sendReservationData}
            showDatePicker={showDatePicker}
            showEndTimePicker={showEndTimePicker}
            selectEmail={selectEmail} 
            test={test} 
            filteredEmails={filteredEmails} 
            query={query}
        /> 
        
        
      </View>
    </>
  );
};

export default ReservationScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.primary,
    justifyContent:'center'
  },
});
