import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";


import { switchLanguage } from "../Store/Actions";
import Colors from '../constants/Colors'

const SwitchLanguage = ({switchA, switchE, navigation}) => {

  const dispatch = useDispatch();
 
  const { isRTL } = useSelector(state => ({
    isRTL: state.user.isRTL,
  }));
const [isEnabled, setIsEnabled] = useState(isRTL);

const toggleSwitch = () => {
  dispatch(switchLanguage(!isEnabled));
  setIsEnabled(previousState => !previousState );
};


return (
    <View style={styles.container}>
      <Text style={styles.text}>{switchE}</Text>  
      <Switch
        trackColor={{ false: Colors.primary, true: Colors.secondary }}
        thumbColor={!isEnabled ? Colors.primary : Colors.secondary}
        onValueChange={toggleSwitch}
        value={isRTL}
      />
      <Text style={styles.text}>{switchA}</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical:10,
    paddingVertical:10,
    backgroundColor:'white',
    flexDirection:'row',  
    marginVertical:5,
    width:'80%',
    justifyContent:'space-evenly',
    borderColor:Colors.primary,
    borderWidth:2,
    borderRadius:20,
    paddingVertical:10,
    position:'absolute',
    bottom: 70  
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color:Colors.primary,
    textAlign:'center',
    letterSpacing:1.5,
    textTransform:'capitalize',
  },
});

export default SwitchLanguage;