import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useAuth from '../../hooks/useAuth';
import { auth } from '../../services/firebaseConfig';

const Home = ({ navigation }: any) => {
  const { logOut } = useAuth();
  const userName = auth.currentUser?.displayName;

  const handleLogout = async () => {
    await logOut();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {userName || 'User'}!</Text>
      <Text style={styles.subtitle}>You are logged in</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 18, marginBottom: 16 },
});

export default Home;
