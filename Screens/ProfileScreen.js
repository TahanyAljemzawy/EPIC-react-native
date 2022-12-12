import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Header from '../Components/Header';
import Colors from '../constants/Colors';
import { strings } from '../Languages/i18ln';

const ProfileScreen = props => {
  const {error, loading, userData} = useSelector(state => ({
    error: state.user.error,
    loading: state.user.loading,
    userData: state.user.userData,
  }));

  return (
    <>
      <Header
        title={strings('headersName.profile')}
        back={true}
        nav={props.navigation}
        color={Colors.secondary}
      />
      {loading ? (
        <View>
          <ActivityIndicator
            color={Colors.primary}
            size="large"
            style={styles.activityIndicator}
          />
        </View>
      ) : (
        <View style={styles.sectionContainer}>
          <Image source={{uri: userData.image || null}} style={styles.image} />
          <View style={styles.titleCont}>
          <FontAwesome
            name={userData.checkInState ? 'circle' : 'circle-o'}
            style={styles.icon}
          />
          <Text style={styles.name}> {strings(userData.fullname)} </Text>
          </View>
          <View style={styles.itemsContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.text}> {strings('profile.email')} : {userData.email}</Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.text}>
              {strings('profile.phoneNumber')} : {userData.phonenumber}
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.text}>{strings('profile.teamName')} : {strings(userData.team)}</Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.text}>{strings('profile.manager')} : {strings(userData.manager)}</Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    backgroundColor: Colors.secondary,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    backgroundColor: '#ccc',
    marginTop: 20,
  },
  itemsContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingTop: '10%',
    borderTopStartRadius: 100,
    borderTopEndRadius: 100,
    alignItems: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    marginVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    padding: 10,
  },
  text: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 10,
    letterSpacing: 3,
    textTransform: 'capitalize',
  },
  activityIndicator: {
    marginLeft: 8,
  },
  titleCont:{
    alignItems:'center',
    flexDirection:'row',
  },
  icon: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#32CD32',
  },
});