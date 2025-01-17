import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateProfile } from '../../hooks/useAuth';
import Input from '../../component/Inputs/Inputs';
import Button from '../../component/Button/Button';
import Toast from 'react-native-toast-message';

const UpdateProfileScreen = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [name, setName] = useState(user?.displayName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

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
        text1: 'Profile Updated',
        text2: 'Your profile has been successfully updated.',
      });
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Update Failed',
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
              : require('../../assets/Vector.png') // Default profile image
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
});

export default UpdateProfileScreen;
