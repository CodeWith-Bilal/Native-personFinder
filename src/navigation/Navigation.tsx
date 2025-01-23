import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {firebase, FirebaseAuthTypes} from '@react-native-firebase/auth';
import {RootStackParams} from '../types/types';
import BottomNavigation from './BottomNavigation';

import {
  Register,
  Login,
  ForgotPassword,
  ReportForm,
  FilterReport,
  ProfileScreen,
  News,
} from '../constants/constants';

const Stack = createNativeStackNavigator<RootStackParams>();

export default function Navigation() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <>
            <Stack.Screen name="MainTabs" component={BottomNavigation} />
            <Stack.Screen name="ReportForm" component={ReportForm} />
            <Stack.Screen name="FilterReport" component={FilterReport} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="News" component={News} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
