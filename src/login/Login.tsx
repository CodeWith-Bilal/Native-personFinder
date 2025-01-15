import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Input from '../component/inputs/Inputs';
import Button from '../component/button/Button';
import useAuth from '../hooks/useAuth';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    const response = await login(email, password);
    if (response.success) {
      Alert.alert('Success', 'Logged in successfully!');
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', response.error || 'Login failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Findr</Text>
      <Text style={styles.subtitle}>Welcome Back</Text>

      <Input
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Input
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Log In" onPress={handleLogin} loading={loading} />

      <View style={styles.linkContainer}>
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          Don't have an account? Sign Up
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#6A5ACD' },
  subtitle: { fontSize: 16, color: '#6A5ACD', marginBottom: 20 },
  linkContainer: { marginTop: 15 },
  link: { color: '#6A5ACD', textDecorationLine: 'underline' },
});

export default LoginScreen;
