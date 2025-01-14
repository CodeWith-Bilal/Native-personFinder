import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const SignupScreen = ({ navigation }: any) => {
  const [rememberMe, setRememberMe] = React.useState(false);

  const handleNext = () => {
    navigation.navigate('Login'); // Navigates to the Login screen
  };

  const toggleCheckbox = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <View style={styles.container}>
      {/* Top-right vector */}
      <Image
        source={require('../assests/Vector.png')} // Adjust the path to the image
        style={styles.topRightVector}
      />

      <Text style={styles.title}>Findr</Text>
      <Text style={styles.subtitle}>Join the Search for Hope</Text>

      <TextInput style={styles.input} placeholder="Enter Your Name" />
      <TextInput
        style={styles.input}
        placeholder="Enter your Email Address"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="************"
        secureTextEntry={true}
      />

      <Text style={styles.infoText}>Your password must be 8 characters.</Text>

      {/* Custom Checkbox */}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={[styles.checkbox, rememberMe && styles.checkboxChecked]}
          onPress={toggleCheckbox}
        >
          {rememberMe && <Text style={styles.checkmark}>✓</Text>}
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>Remember me</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.helpText}>Need Help or Have Questions?</Text>
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
  topRightVector: {
    position: 'absolute',
    top: 3,
    right: 0,
    width: 150,
    height: 120,
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#5A67D8',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 23,
    color: '#4A5568',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#DDD5DDD',
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
    fontSize: 16,
    color: '#00000',
  },
  infoText: {
    fontSize: 14,
    color: '#667085',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#5A67D8',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: '#000',
  },
  checkmark: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#4A5568',
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
  helpText: {
    fontSize: 14,
    color: '#5A67D8',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default SignupScreen;
