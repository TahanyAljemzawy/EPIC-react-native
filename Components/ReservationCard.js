import React, {useEffect, useState} from 'react';
import {
  I18nManager,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../constants/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EmailAutocomplete from './EmailAutocomplete';
import EmailItem from './EmailItem';
import { strings, isRTL } from '../Languages/i18ln';


const ReservationCard = ({
  bookedData,
  deleteEmail,
  sendReservationData,
  showDatePicker,
  showEndTimePicker,
  duration,
  selectEmail,
  test,
  filteredEmails,
  query,
}) => {
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (
      bookedData.startingTime &&
      bookedData.endingTime &&
      bookedData.guestInvitations?.length > 0
    ) {
      setDisable(false);
    }
  }, [bookedData]);
  

  return (
    
    <View style={styles.dataContainer}>
      <TouchableOpacity style={styles.cardElem} onPress={showDatePicker}>
        <Fontisto name="date" style={styles.icon} />
        <Text style={styles.cardElmText}>
          {bookedData.date || strings('reservationCard.datePicker')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardElem}>
        <MaterialCommunityIcons
          name="clock-time-eight-outline"
          style={styles.icon}
        />
        <Text style={styles.cardElmText}>
          {bookedData.startingTime || strings('reservationCard.startTime')}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardElem} onPress={showEndTimePicker}>
        <MaterialCommunityIcons
          name="clock-time-ten-outline"
          style={styles.icon}
        />
        <Text style={styles.cardElmText}>
          {bookedData.endingTime || strings('reservationCard.endTime')}
        </Text>
      </TouchableOpacity>
      <View style={styles.cardElem}>
        <Entypo name="time-slot" style={styles.icon} />
        <Text style={styles.cardElmText}>
          {bookedData.duration || strings('reservationCard.meetingDuration')}
        </Text>
      </View>
      <View style={styles.EmailsInputCont}>
        <EmailAutocomplete
          selectEmail={selectEmail}
          test={test}
          filteredEmails={filteredEmails}
          query={query}
        />
      </View>
      <View style={styles.scrollViewStyle}>
      <ScrollView>
        {bookedData.guestInvitations?.map((email) => {
          return (
            <EmailItem key={email} email={email} deleteEmail={deleteEmail} />
           );
        })}
      </ScrollView>
      </View>
      <TouchableOpacity
        style={disable ? styles.disableStyle : styles.btn}
        onPress={disable ? null : sendReservationData}>
        <Text style={styles.btnText}>{strings('reservationCard.sendReservation_btn')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReservationCard;

const styles = StyleSheet.create({
  dataContainer: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    borderTopLeftRadius: 60,
    borderTopRightRadius:60,
    position:'absolute',
    bottom:0,
    paddingTop:20,
   
  },
  itemText: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
  },
  text: {
    fontSize: 20,
    textTransform: 'capitalize',
    
  },
  iconContainer:{
    alignItems:'center',
    padding:2, 
  },
  icon: {
   // transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
    fontWeight: 'bold',
    fontSize: 25,
    color: Colors.primary,
    marginRight: 5,
    marginBottom: 5,
  },
  EmailsInputCont:{
   elevation: 100,
    position: 'absolute',
    top: 220,
    width: '87%',
    marginVertical: 10,
    height:50
    
  },
  selectedEmailContainer: {
    flexDirection: 'row',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 45,
    padding: 5,
    marginVertical: 5,
    backgroundColor: '#E0FFFF',
    justifyContent: 'space-between',
    width: 300,
  },
  emailsContainer: {
    borderColor: '#ccc',
    borderWidth: 2,
    height: '70%',
    width: '100%',
  },
  scrollViewStyle:{
    position:'absolute',
    top:300,
    height:'35%',
  },
  emailText: {
    textAlign: 'center',
    color: Colors.primary,
    fontSize: 18,
    marginLeft: 5,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.primary,
    textTransform: 'capitalize',
  },
  btn: {
    alignItems: 'center',
    borderColor: Colors.primary,
    borderRadius: 30,
    borderWidth: 3,
    overflow: 'hidden',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#FAEBD7',
    width: '60%',
    position:'absolute',
    bottom:20
   },
  cardElem: {
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    width: '87%',
    marginVertical: 10,
    height:'5%',
    flexDirection: 'row',
  },
  cardElmText: {
    fontSize: 18,
    color: '#ccc',
    textTransform: 'capitalize',    
  },
  disableStyle: {
    alignItems: 'center',
    borderColor: '#ccc',
    borderRadius: 30,
    borderWidth: 3,
    overflow: 'hidden',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    width: '60%',
    position:'absolute',
    bottom:20
  },
  autocompleteContainer: {
    width: '90%',
    position: 'absolute',
    elevation: 100,
  },
});
