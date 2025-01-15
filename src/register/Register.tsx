import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Input from '../component/inputs/Inputs';
import Button from '../component/button/Button';
import useAuth from '../hooks/useAuth';

const SignUpScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp, loading } = useAuth();

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    const response = await signUp(email, password, name);
    if (response.success) {
      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('Login');
    } else {
      Alert.alert('Error', response.error || 'Sign up failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Findr</Text>
      <Text style={styles.subtitle}>Join the Search for Hope</Text>

      <Input
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
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

      <Button title="Sign Up" onPress={handleSignUp} loading={loading} />

      <View style={styles.linkContainer}>
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Already have an account? Log in
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
     fontWeight: 'bold',
      color: '#6A5ACD',
    },
  subtitle: {
     fontSize: 16,
     color: '#6A5ACD',
      marginBottom: 20,
     },
  linkContainer: {
    marginTop: 15,
  },
  link: {
    color: '#6A5ACD',
    textDecorationLine: 'underline',
   },
});

export default SignUpScreen;
