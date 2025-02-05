import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Button from '../../component/button/Button';
import {useAuth} from '../../hooks/useAuth';
import {Logo} from '../../component/logo/Logo';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {getInputConfig} from '../../constants/constants';
import {IMAGES} from '../../constants/constants';
import {colors} from '../../constants/colors';
import {styles} from './loginStyles';

export default function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    onLogin,
    onGoogleButtonPress,
    loading,
  } = useAuth();
  const navigation = useAppNavigation();

  const inputs = getInputConfig(email, setEmail, password, setPassword);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Logo color={colors.blue} size="65" />
        <Text style={styles.welcomeText}>Welcome Back</Text>

        {inputs.map((input, index) => (
          <View key={index} style={styles.inputLabelContainer}>
            <Text style={styles.label}>{input.label}</Text>
            <View style={styles.inputContainer}>
              {input.icon && <Image source={input?.icon} style={styles.icon} />}
              <TextInput
                style={[styles.input, {width: '80%'}]}
                placeholder={input?.placeholder}
                value={input?.value}
                onChangeText={input?.onChangeText}
                keyboardType={input?.keyboardType}
                secureTextEntry={input?.secureTextEntry}
              />
            </View>
            {input.infoText && (
              <Text style={styles.infoText}>{input?.infoText}</Text>
            )}
          </View>
        ))}

        <View style={styles.width}>
          <Button
            title={loading ? '' : 'Log in'}
            onPress={onLogin}
            disabled={loading}
            loading={loading}
          />
        </View>

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
          <Image source={IMAGES.google} />
        </TouchableOpacity>

        <Image source={IMAGES.logVector} style={styles.bottomImage} />
      </View>
    </ScrollView>
  );
}
