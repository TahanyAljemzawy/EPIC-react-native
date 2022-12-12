import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../constants/Colors';

const EmailItem = ({email, deleteEmail}) => {
  const deleteSelectedEmail = () => {
    deleteEmail(email);
  };

  return (
    <View style={styles.selectedEmailContainer}>
      <Text style={styles.emailText}>{email}</Text>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={deleteSelectedEmail}>
        <Entypo name="circle-with-cross" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default EmailItem;

const styles = StyleSheet.create({
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
  emailText: {
    textAlign: 'center',
    color: Colors.primary,
    fontSize: 18,
    marginLeft: 5,
  },
  iconContainer: {
    alignItems: 'center',
    padding: 2,
  },
  icon: {
    fontWeight: 'bold',
    fontSize: 25,
    color: Colors.primary,
    marginRight: 5,
    marginBottom: 5,
  },
});
