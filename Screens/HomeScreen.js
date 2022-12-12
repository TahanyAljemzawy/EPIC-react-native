import React, { useState , useEffect } from 'react';
import { I18nManager, StyleSheet, Text, View, } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../Components/Header';
import Colors from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {checkOut, getFakedPost, postFakedPost} from '../Store/Actions/index';
import { strings, isRTL } from '../Languages/i18ln';
import SwitchLanguage from '../Components/SwitchLanguage';
import BottomList from '../Components/BottomList';

const HomeScreen = props => {

  const dispatch = useDispatch();


  const { checkInState } = useSelector(state => ({
    checkInState: state.scan.checkinState,
  }));

  const viewTeam = () => {
    props.navigation.navigate('TeamViewScreen');
  };
  const onCheckIn = () => {
    props.navigation.navigate('ScanScreen');
  };
  const onCheckOut = () => {
    dispatch(checkOut());
  };
  const visitRoomsView = () => {
    props.navigation.navigate('RoomsViewScreen');
  }

  const fetchData = ()=>{
    getFakedPost()
  }

  const sendData = ()=> {
    postFakedPost()
  }

  return (
    <>
      <Header
        title={strings('headersName.home')}
        nav={props.navigation}
      />
          
      <View style={styles.sectionContainer}>
         {/* Checkout/in BTN */}
        <TouchableOpacity
          style={styles.btn}
          onPress={checkInState ? onCheckOut : onCheckIn}>
              <Text style={{...styles.btnText}}>{strings('home.checkIn_btn')}</Text>
              <Ionicons name="location-sharp" style={{...styles.icon}} />
          
        </TouchableOpacity>
        {/* Team View BTN */}        
        <TouchableOpacity style={styles.btn} onPress={viewTeam}>
          <Text style={{...styles.btnText}}>
            {strings('home.viewTeam_btn')}
          </Text>
          <FontAwesome name="group" style={{...styles.icon}} />
        </TouchableOpacity>
        {/* Meeting rooms View BTN */} 
          <TouchableOpacity
            style={styles.btn}
            onPress={visitRoomsView}>
              <Text style={{...styles.btnText}}>{strings('home.meetingRooms_btn')}</Text>
          </TouchableOpacity>  
          {/* Get the post from faked api */} 
          <TouchableOpacity
            style={styles.btn}
            onPress={fetchData}>
              <Text style={{...styles.btnText}}>get post</Text>
          </TouchableOpacity> 
          <TouchableOpacity
            style={styles.btn}
            onPress={sendData}>
              <Text style={{...styles.btnText}}>send post</Text>
          </TouchableOpacity>   


          <SwitchLanguage switchA={strings('drawerNav.arabic')} switchE={strings('drawerNav.english')} navigation={props.navigation}/>

      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.primary,
    marginHorizontal:5,
  },
  btn: {
    borderColor: Colors.primary,
    borderRadius: 30,
    borderWidth: 3,
    overflow: 'hidden',
    width: '50%',
    height: 80,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
backgroundColor:'white'
  },
  icon: {
    fontWeight: 'bold',
    fontSize: 40,
    color: Colors.primary,

  },
  animatedBox: {
    width:100,
     height:150,
     backgroundColor:'pink',
  },
});
