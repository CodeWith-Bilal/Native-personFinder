import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { logout as firebaseLogout } from '../../hooks/useAuth';
import { logout } from '../../redux/slice/authSlice';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogout = async () => {
    try {
      await firebaseLogout();
      dispatch(logout());
      navigation.navigate('Login');
    } catch (err) {
      const error = err as Error; // Cast the error to the `Error` type
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
