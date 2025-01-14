import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const LoginScreen = () => {
  const handleLogin = () => {
    // Add login functionality here
    console.log('Login button pressed');
  };

  const handleGoogleLogin = () => {
    // Add Google login functionality here
    console.log('Google login button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Findr</Text>
      <Text style={styles.subtitle}>Search for hope</Text>

      <Text style={styles.welcomeText}>Welcome Back</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />

      <Text style={styles.infoText}>Your email address is your username.</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <View style={styles.linkContainer}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Forget your password</Text>
        </TouchableOpacity>
        <Text style={styles.divider}> | </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Register for an account</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
          }}
          style={styles.googleIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#5A67D8',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    position: 'relative',
    top: -25,
    left: 30,
    right: 0,
    color: '#4A5568',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  welcomeText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#2D3748',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  infoText: {
    fontSize: 14,
    color: '#667085',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#5A67D8',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  linkText: {
    fontSize: 14,
    color: '#5A67D8',
    textDecorationLine: 'underline',
  },
  divider: {
    fontSize: 14,
    color: '#A0AEC0',
    marginHorizontal: 10,
  },
  orText: {
    fontSize: 14,
    color: '#A0AEC0',
    textAlign: 'center',
    marginBottom: 20,
  },
  googleButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  googleIcon: {
    width: 40,
    height: 40,
  },
});

export default LoginScreen;
