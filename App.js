import React, { useEffect } from 'react';
import {
  I18nManager,
  StatusBar,
  StyleSheet,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainStack from './Navigation/MainStack';
import AuthStack from './Navigation/AuthStack';
import TempScreen from './Components/TempScreen'
import SplashScreen from 'react-native-splash-screen'
import { FG_MessageHandler, Check_Permission, Notification_Listeners } from './Notifications'


const Stack = createStackNavigator();

const App =()=>{


  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
      FG_MessageHandler(); // to handel foreground notifications  
  
    }, [])
  
  return (
    <>
    <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="tempscreen">
        <Stack.Screen name="tempscreen" component={TempScreen} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainStack" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
 </>
  )  
}


export default App;

const styles = StyleSheet.create({
  sectionContainer: {
  flex:1,
 justifyContent:'center',
 alignItems:'center',
  },
});


