import React from 'react';
import { I18nManager, Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Colors from '../constants/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import {selectRoom} from '../Store/Actions';
import { strings, isRTL } from '../Languages/i18ln';


const ListItem = ({ name, floorNum,itemId, capacity, equipments, navigation,  }) => {

  const dispatch = useDispatch();
  
  const onSelect =()=> {
    dispatch(selectRoom(itemId, navigation));
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <View style={styles.cardInfoCont}>
        <Text style={styles.title}>{strings(name)}</Text>          
          <Text style={styles.text}>{strings('meetingsRooms.floor')} : {strings(floorNum)}</Text>
          <Text style={styles.text}>{strings('meetingsRooms.capacity')} : {capacity}</Text>
          <Text style={styles.text}>{strings('meetingsRooms.equipments')} : {strings(equipments)}</Text>
      </View>
      <Entypo name={I18nManager.isRTL? 'chevron-left': 'chevron-right'} style={styles.icon}/>
    </TouchableOpacity>
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
      flexDirection: I18nManager.isRTL? 'row-reverse' : 'row',
  },
  cardInfoCont:{
    width:'95%',
  },
  title: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
    letterSpacing: 0.5,
    textTransform:'capitalize',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    textTransform:'capitalize',
    color:'#000',
  },
  icon: {
    fontSize:35 ,
    fontWeight:'bold',
    color: Colors.primary,
  },
});
