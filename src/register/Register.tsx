import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { setLoading, setError } from '../redux/slice/authSlice';
import { registerWithEmail } from '../services/firebaseConfig'; // Firebase function to register
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSignUp = async () => {
    dispatch(setLoading(true));
    try {
      await registerWithEmail(email, password);  // Register user
      dispatch(setLoading(false));
      navigation.navigate('Login');  // Navigate to login page after successful registration
    } catch (error: any) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };

  return (
    <View>
      <Text>Sign Up</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignupScreen;
