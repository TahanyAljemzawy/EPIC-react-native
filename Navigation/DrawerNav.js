import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Image, View, StyleSheet, Text, I18nManager} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';

import ProfileScreen from '../Screens/ProfileScreen';
import HomeScreen from '../Screens/HomeScreen';
import MapScreen from '../Screens/MapScreen';
import logo from '../assests/loginLogo.png';
import Colors from '../constants/Colors';
import {onLogout} from '../Store/Actions/index';
import {strings} from '../Languages/i18ln';
import CameraScreen from '../Screens/CameraScreen';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({navigation}) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(onLogout());
    navigation.replace('AuthStack');
  };
  const visitProfile = () => {
    navigation.navigate('ProfileScreen');
  };
  const visitMap = () => {
    navigation.navigate('MapScreen');
  };

  const visitCam = () => {
    navigation.navigate('CameraScreen');
  };

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.imgContainer}>
        <Image source={logo} />
      </View>
      <View style={styles.btnsContainer}>
        <TouchableOpacity style={styles.btnContainer} onPress={visitProfile}>
          <Text style={styles.text}>{strings('drawerNav.profile')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnContainer} onPress={visitMap}>
          <Text style={styles.text}>{strings('drawerNav.map')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnContainer} onPress={visitCam}>
          <Text style={styles.text}>{strings('drawerNav.logout_btn')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnContainer} onPress={logout}>
          <Text style={styles.text}>{strings('drawerNav.logout_btn')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DrawerNav = () => {
  const {isRtl} = useSelector(state => ({
    isRtl: state.user.isRTL,
  }));

  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerPosition={isRtl ? 'left' : 'right'}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="MapScreen" component={MapScreen} />
      <Drawer.Screen name="CameraScreen" component={CameraScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  btnContainer: {
    marginVertical: 5,
    width: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 20,
    paddingVertical: 10,
  },
  btnsContainer: {
    width: '90%',
    margin: 100,
    borderTopColor: Colors.primary,
    borderTopWidth: 2,
    padding: 10,
    position: 'relative',
    top: 50,
  },
  imgContainer: {
    position: 'absolute',
    top: 100,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.86,
    shadowRadius: 13.51,
    elevation: 20,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontWeight: '800',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    letterSpacing: 1.5,
    textTransform: 'capitalize',
  },
});

export default DrawerNav;
