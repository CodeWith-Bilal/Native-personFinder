import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { setUser, logout } from '../redux/slice/authSlice';
import auth from '@react-native-firebase/auth';
import LoginScreen from '../login/Login';
import HomeScreen from '../screen/home/Home';
import SignupScreen from '../register/Register';
// import LoginScreen from './screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';
// import SignupScreen from './screens/SignupScreen';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Signup: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const dispatch = useDispatch();
  const [initializing, setInitializing] = useState(true);
  const [user, setUserState] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setUserState(user);  // Update user state
      if (user) {
        dispatch(setUser({ uid: user.uid }));  // Dispatch user info to Redux
      } else {
        dispatch(logout());  // Clear Redux state if user logs out
      }
      if (initializing) {
        setInitializing(false);  // Only set initializing to false once
      }
    });

    return unsubscribe;
  }, [initializing, dispatch]);

  if (initializing) {
    // Optionally, render a loading screen while checking authentication status
    return null; // or a loading spinner
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'Home' : 'Login'}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
