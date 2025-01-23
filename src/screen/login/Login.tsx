import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Button from '../../component/button/Button';
import {useAuth} from '../../hooks/useAuth';
import {Logo} from '../../component/logo/Logo';
import {useAppNavigation} from '../../utils/AppNavigation';
import {getInputConfig} from '../../constants/constants';
import {IMAGES} from '../../constants/constants';
import {colors} from '../../constants/colors';
import {styles} from './LoginStyles';
import InputField from '../../component/input/InputField'; // Adjust the path if necessary

export default function Login() {
  const {email, setEmail, password, setPassword, onLogin, onGoogleButtonPress} =
    useAuth();
  const navigation = useAppNavigation();

  const inputs = getInputConfig(
    email,
    setEmail,
    password,
    setPassword,
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Logo color={colors.skyBlue} size="65" />
        <Text style={styles.welcomeText}>Welcome Back</Text>

        {inputs.map((input, index) => (
          <View key={index} style={styles.inputLabelContainer}>
            <InputField
              label={input.label}
              placeholder={input.placeholder}
              value={input.value}
              onChangeText={input.onChangeText}
              keyboardType={input.keyboardType}
              secureTextEntry={input.secureTextEntry}
              helperText={input.infoText}
            />
          </View>
        ))}

        <Button title="Log in" onPress={onLogin} />

        <View style={styles.linkContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.link}>Forget your password</Text>
          </TouchableOpacity>
          <Text style={styles.linkSeparator}>|</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Register for an account</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.orContainer}>
          <View style={styles.line}></View>
          <Text style={styles.orText}>or</Text>
          <View style={styles.line}></View>
        </View>

        <TouchableOpacity onPress={onGoogleButtonPress}>
          <Image source={IMAGES.google}/>
        </TouchableOpacity>

        <Image source={IMAGES.logVector} style={styles.bottomImage} />
      </View>
    </ScrollView>
  );
}
