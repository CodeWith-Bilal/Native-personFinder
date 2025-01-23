import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import Button from '../../component/button/Button';
import {useAuth} from '../../hooks/useAuth';
import {Logo} from '../../component/logo/Logo';
import {useAppNavigation} from '../../utils/AppNavigation';
import {getInputConfig} from '../../constants/constants';
import {IMAGES} from '../../constants/constants';
import {colors} from '../../constants/colors';
// import {styles} from './LoginStyles';
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
            <Text style={styles.label}>{input.label}</Text>
            <View style={styles.inputContainer}>
              {input.icon && <Image source={input?.icon} style={styles.icon} />}
              <TextInput
                style={styles.input}
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
          <Image source={IMAGES.google} />
        </TouchableOpacity>

        <Image source={IMAGES.logVector} style={styles.bottomImage} />
      </View>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  bottomImage: {
    position: 'absolute',
    bottom: 0,
    marginTop:10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: colors.whitish,
  },
  logo: {
    fontSize: 64,
    fontWeight: '700',
    color: colors.skyBlue,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.skyBlue,
    left: 30,
    top: -17,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 45,
    fontWeight: '700',
    color: colors.bigBlack,
    marginBottom: 30,
    marginTop: 15,
    fontFamily: 'Familjen Grotesk',
  },
  inputLabelContainer: {
    width: '80%',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.label,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.ashGray,
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '100%',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.slateGray,
  },
  icon: {
    marginRight: 10,
  },
  infoText: {
    fontWeight: '400',
    fontSize: 14,
    color: colors.slateGray,
    marginBottom: 20,
    width: '80%',
  },

  button: {
    width: '80%',
    height: 52,
    backgroundColor: colors.skyBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 23,
    fontWeight: '600',
    fontFamily: 'Montserrat',
  },

  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  link: {
    marginTop: 21,
    fontFamily: 'Familjen Grotesk',
    fontSize: 11,
    color: colors.bigBlack,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  linkSeparator: {
    marginHorizontal: 10,
    color: colors.bigBlack,
    marginTop: 21,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    width: '80%',
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.bigBlack,
  },
  orText: {
    fontFamily: 'Familjen Grotesk',
    fontWeight: '400',
    fontSize: 16,
    color: colors.bigBlack,
    marginHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.orBack,
    padding: 10,
    backgroundColor: colors.orBack,
  },
});
