import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../login/Login';
import SignUpScreen from '../register/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/home/Home';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
