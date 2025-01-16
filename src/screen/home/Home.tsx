import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { logout as firebaseLogout } from '../../services/firebaseConfig';  // Firebase logout function
import { logout } from '../../redux/slice/authSlice';  // Redux logout action

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await firebaseLogout();
      dispatch(logout());  // Clear user data in Redux
      navigation.navigate('Login');  // Navigate to login screen after logout
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
