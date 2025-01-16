import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { setLoading, setError, setUser } from '../redux/slice/authSlice';
import { loginWithEmail } from '../services/firebaseConfig'; // Firebase login function
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogin = async () => {
    dispatch(setLoading(true));
    try {
      const user = await loginWithEmail(email, password);  // Firebase login
      dispatch(setUser({ uid: user.uid }));
      dispatch(setLoading(false));
      navigation.navigate('Home');  // Navigate to Home after successful login
    } catch (error: any) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };

  return (
    <View>
      <Text>Login</Text>
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
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
