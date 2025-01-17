import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../Profile';
import UpdateProfileScreen from '../../update/UpdateProfile';
// import ProfileScreen from '../screen/profile/ProfileScreen';
// import UpdateProfileScreen from '../screen/update/UpdateProfileScreen';

const ProfileStack = createNativeStackNavigator();

const ProfileStackNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    <ProfileStack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
  </ProfileStack.Navigator>
);

export default ProfileStackNavigator;
