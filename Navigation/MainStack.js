import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../Screens/ProfileScreen';
import TeamViewScreen from '../Screens/TeamViewScreen';
import ScanScreen from '../Screens/ScanScreen';
import RoomsViewScreen from '../Screens/RoomsViewScreen';
import DrawerNav from './DrawerNav';
import HomeScreen from '../Screens/HomeScreen';
import RoomDetailsScreen from '../Screens/RoomDetailsScreen';
import ReservationScreen from '../Screens/ReservationScreen'

const Stack = createStackNavigator();
const MainStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={DrawerNav} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RoomsViewScreen" component={RoomsViewScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="TeamViewScreen" component={TeamViewScreen} />
        <Stack.Screen name="ScanScreen" component={ScanScreen} />
        <Stack.Screen name="ReservationScreen" component={ReservationScreen} />
        <Stack.Screen name="RoomDetailsScreen" component={RoomDetailsScreen} />
      </Stack.Navigator>
    )

}

export default MainStack



