import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Alert, Text } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateProfile } from '../../hooks/useAuth';
import Input from '../../component/inputs/Inputs';
import Button from '../../component/button/Button';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import { logout } from '../../redux/slice/authSlice';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';

const UpdateProfileScreen = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [name, setName] = useState(user?.displayName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSelectPhoto = () => {
    launchImageLibrary({ mediaType: 'photo' }, async (response) => {
      if (response.didCancel) return;

      if (response.assets && response.assets.length > 0) {
        const asset = response.assets[0];
        setPhotoURL(asset.uri || '');
      }
    });
  };

  const handleUpdateProfile = async () => {
    try {
      await updateProfile({ name, email, password, photoURL });
      Toast.show({
        type: 'success',
        text1: 'Profile updated successfully!',
      });
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Error updating profile',
        text2: (err as Error).message,
      });
    }
  };

  const handleLogout = async () => {
    try {
      await auth().signOut();
      dispatch(logout()); // Clear the Redux store
      navigation.replace('Login'); // Navigate to Login screen
      Toast.show({
        type: 'success',
        text1: 'Logged out successfully!',
      });
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Error logging out',
        text2: (err as Error).message,
      });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSelectPhoto}>
        <Image
          source={
            photoURL
              ? { uri: photoURL }
              : require('../../assests/Vector.png') // Default profile image
          }
          style={styles.profileImage}
        />
      </TouchableOpacity>
      <Input label="Name" value={name} onChangeText={setName} />
      <Input label="Email" value={email} onChangeText={setEmail} />
      <Input
        label="Password"
        placeholder="Enter a new password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Update Profile" onPress={handleUpdateProfile} />
      <Button title="Logout" onPress={handleLogout} style={styles.logoutButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: '#ddd',
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: 'red', // Optional styling
  },
});

export default UpdateProfileScreen;
