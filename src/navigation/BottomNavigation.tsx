import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/home/Home';
import ProfileScreen from '../screen/profile/Profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14, // Adjust text size
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: '#f8f8f8', // Tab bar background
        },
        tabBarActiveTintColor: 'tomato', // Active tab label color
        tabBarInactiveTintColor: 'gray', // Inactive tab label color
        headerShown: false, // Hide headers in tabs
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
