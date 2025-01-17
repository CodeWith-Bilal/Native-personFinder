import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { setLoading, setError, setUser } from '../redux/slice/authSlice';
import { loginWithEmail, signInWithGoogle } from '../hooks/useAuth';
import Input from '../component/inputs/Inputs';
import Button from '../component/button/Button';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
// import Input from '../components/Input';
// import Button from '../components/Button';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
 const navigation = useNavigation();
  const handleLogin = async () => {
    console.log('Starting Login...');
    console.log('Email:', email);
    console.log('Password:', password);
    dispatch(setLoading(true));
    try {
      const user = await loginWithEmail(email, password);
      console.log('User Details:', user);
      dispatch(
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        })
      );
      Toast.show({
        type: 'success',
        text1: 'Login Successful!',
      });
      navigation.navigate('Home');
    } catch (err) {
      console.error('Login Error:', err);
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        text2: err.message || 'Something went wrong',
      });
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleGoogleSignIn = async () => {
    dispatch(setLoading(true));
    try {
      const user = await signInWithGoogle();
      dispatch(
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        })
      );
    } catch (err) {
      const error = err as Error;
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign In with Google" onPress={handleGoogleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default LoginScreen;
