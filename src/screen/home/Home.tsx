import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  useSelector } from 'react-redux';
// import { useNavigation } from '@react-navigation/native';
// import { logout as firebaseLogout } from '../../hooks/useAuth';
// import { logout } from '../../redux/slice/authSlice';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../../types/types';
import { RootState } from '../../redux/store';

const HomeScreen = () => {
  // const dispatch = useDispatch();
  // const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Fetch user details from Redux store
  const user = useSelector((state: RootState) => state.auth.user);

  // const handleLogout = async () => {
  //   try {
  //     await firebaseLogout(); // Logout from Firebase
  //     dispatch(logout()); // Clear Redux store
  //     navigation.replace('Login'); // Navigate to Login screen
  //   } catch (err) {
  //     const error = err as Error; // Cast the error to the Error type
  //     console.error(error.message);
  //   }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome, {user?.displayName || 'Guest'}!
      </Text>
      <Text style={styles.text}>App is UnderConstruction "BY DEVELOPER"</Text>
      {/* <Button title="Logout" onPress={handleLogout} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  text:{
    marginBottom: 100,
    fontSize: 24,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
