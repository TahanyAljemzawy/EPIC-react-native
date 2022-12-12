import React from 'react';
import { I18nManager, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import Colors from '../constants/Colors';


const Header = props => {

  const { isRTL } = useSelector(state => ({
    isRTL: state.user.isRTL,
  }));

  const goBack = () => props.nav.goBack();
  const toggleDrawer = () => props.nav.toggleDrawer();

 //note : the color of the header & title changes, I need to use inlinestyle
  return (
    <View
     style={{
      backgroundColor:props.color|| 'white',    
      ...styles.header}}>
      {props.back ? (
        <TouchableOpacity
        style={styles.iconContainer}
        onPress={goBack}>
          <Ionicons name={isRTL? "arrow-forward-circle":"arrow-back-circle"} size={40} color={props.color? 'white':Colors.primary} />    
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{ 
          ...styles.iconContainer,
         }}
            onPress={toggleDrawer}>
            <Ionicons name="menu" size={40} color={props.color? 'white':Colors.primary} />
        </TouchableOpacity>
      )}
      {props.color ? 
      <Text style={{ color:'white', ...styles.title}}> {props.title} </Text>
      :
      <Text style={{color:Colors.primary,...styles.title}}> {props.title} </Text>
      } 
      </View>   
   
  );
};

export default Header;


const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',  
    justifyContent:'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.86,
    shadowRadius: 13.51,
    elevation: 20,
   // flexDirection:I18nManager.isRTL? 'row' : 'row-reverse',
  },
  title: {
    fontSize: 20,
    letterSpacing:2,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform:'capitalize',
    paddingHorizontal: 15,
   
  },
  titleCont:{
    flexDirection: 'row',
    paddingHorizontal: 10,
    
  },
  iconContainer:{
    alignItems:'center',
    paddingHorizontal: 15,
    },
});
