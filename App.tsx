import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './src/register/Register'; // Adjust the path as needed
import LoginScreen from './src/login/Login'; // Adjust the path as needed
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();
SplashScreen.hide();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }} // Hide the header for the Signup screen
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }} // Customize the header for the Login screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
