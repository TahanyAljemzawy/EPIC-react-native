import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen'
const Stack = createStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack


