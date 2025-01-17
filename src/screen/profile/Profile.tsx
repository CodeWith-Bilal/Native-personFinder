import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const navigation = useNavigation();

  const handleEditProfile = () => {
    navigation.navigate('UpdateProfile'); // Navigates to the UpdateProfileScreen
  };

  return (
    <View style={styles.container}>
      <Image
        source={
          user?.photoURL
            ? { uri: user.photoURL }
            : require('../../assests/Vector.png') // Default image
        }
        style={styles.profileImage}
      />
      <Text style={styles.name}>{user?.displayName || 'Guest'}</Text>
      <Text style={styles.email}>{user?.email || 'No email provided'}</Text>
      <Button title="Edit Profile" onPress={handleEditProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 20, backgroundColor: '#ddd' },
  name: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  email: { fontSize: 16, marginBottom: 20 },
});

export default ProfileScreen;
