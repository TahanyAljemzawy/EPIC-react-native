import React from 'react';
import { I18nManager, Image, StyleSheet, Text, View } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import Colors from '../constants/Colors';
import { strings } from '../Languages/i18ln';


const ListItem = ({ image, fullName, location, email, phonenumber, isCheckIn }) => {

  const { isRTL } = useSelector(state => ({
    isRTL: state.user.isRTL,
  })); 

  const arStyles = {
   arIcon : {
    position:'absolute',
    right: isRTL? 0 : null,
    },
    arText : {
      position:'relative',
      right: isRTL? 20 : null,
      left:!isRTL? 20 : null,
    },
    arItemCont : {
      flexDirection:'row',
      justifyContent:isRTL? 'flex-end':'flex-start',
    }
  }  


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: image || null }} />
      </View>
      <View style={styles.infoContainer}>
        <View style={arStyles.arItemCont}>
          <AntDesign name='user' style={{...styles.icon, ...arStyles.arIcon}} />
          <Text style={{ ...styles.text, ...arStyles.arText }}> {strings('myTeam.name')} : {fullName}</Text>
        </View>
        <View style={arStyles.arItemCont}>
          <AntDesign name='enviromento' style={{...styles.icon, ...arStyles.arIcon}} />
          <Text style={{ ...styles.text, ...arStyles.arText }}> {strings('myTeam.location')} : {location} </Text>
        </View>
        <View style={arStyles.arItemCont}>
          <AntDesign name='message1' style={{...styles.icon, ...arStyles.arIcon}} />
          <Text style={{ ...styles.text, ...arStyles.arText }}> {strings('myTeam.email')} : {email}</Text>
        </View>
        <View style={arStyles.arItemCont}>
          <AntDesign name='phone' style={{...styles.icon, ...arStyles.arIcon}} />
          <Text style={{ ...styles.text, ...arStyles.arText }}> {strings('myTeam.phoneNumber')} : {phonenumber}</Text>
        </View>
        <View style={arStyles.arItemCont}>
        <FontAwesome
            name={isCheckIn ? 'circle' : 'circle-o'}
            style={{...styles.checkinIcon, ...arStyles.arIcon}}
          />
          <Text style={{ ...styles.text, ...arStyles.arText }}> {isCheckIn? strings('myTeam.checkIn'):strings('myTeam.checkOut')}</Text>
        </View>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 10,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#ccc',
    borderColor: Colors.primary,
    borderWidth: 1,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    marginLeft: 25,
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
    letterSpacing: 0.5,
  },

  text: {
    fontSize: 15,
    fontWeight: 'bold',
    textTransform:'capitalize',
    paddingBottom:5,
  },
  icon: {
    fontSize: 23,
    color: Colors.secondary,
  },
  checkinIcon:{
    fontSize: 22,
    color: '#32CD32',    
  }
});
