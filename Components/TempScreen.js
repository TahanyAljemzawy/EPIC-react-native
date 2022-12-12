import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useSelector} from 'react-redux';
const TempScreen = props => {
  const {userState} = useSelector(state => ({
    userState: state.user.userIsLogin,
  }));

  useEffect(() => {
     if (userState) {
      props.navigation.replace('MainStack');
      setTimeout(() => {
        SplashScreen.hide();
      }, 500);
    } else {
      SplashScreen.hide();
      props.navigation.replace('AuthStack');
    }
  }, []);

  return <></>;
};
export default TempScreen;
