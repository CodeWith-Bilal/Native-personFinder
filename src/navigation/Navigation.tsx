import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { firebase, FirebaseAuthTypes } from '@react-native-firebase/auth';
import { RootStackParams } from '../types/types';
import { authenticatedScreens, unauthenticatedScreens } from '../utils/NavigationScreen';

const Stack = createNativeStackNavigator<RootStackParams>();

export default function Navigation() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(User => {
      setUser(User);
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user
          ? authenticatedScreens.map(screen => (
              <Stack.Screen key={screen.name} name={screen.name} component={screen.component} />
            ))
          : unauthenticatedScreens.map(screen => (
              <Stack.Screen key={screen.name} name={screen.name} component={screen.component} />
            ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
