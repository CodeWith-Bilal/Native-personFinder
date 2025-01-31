import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import {useAuth} from '../../hooks/useAuth';
import Button from '../../component/button/Button';
import {getInputs} from '../../constants/constants';
import {IMAGES} from '../../constants/constants';
import {colors} from '../../constants/colors';

const Register: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    isSelected,
    setSelection,
    onRegister,
    loading,
    error,
  } = useAuth();

  const inputs = getInputs(
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={IMAGES?.regVector}
          style={styles.topRightImage}
          resizeMode="contain"
        />
        <Text style={styles.logoText}>Findr</Text>
        <Text style={styles.subtitle}>Join the Search for Hope</Text>

        {inputs.map((input, index) => (
          <View key={index} style={styles.inputContainer}>
            <Text style={styles.label}>{input.label}</Text>
            <View style={styles.iconInputContainer}>
              {input.icon && (
                <Image source={input.icon} style={styles.inputIcon} />
              )}
              <TextInput
                style={[styles.input, input.icon && styles.inputWithIcon]}
                placeholder={input.placeholder}
                value={input.value}
                onChangeText={input.onChangeText}
                secureTextEntry={input.secureTextEntry}
                keyboardType={input.keyboardType}
                placeholderTextColor={colors.black}
              />
            </View>
            {input?.helperText && (
              <Text style={styles.helperText}>{input?.helperText}</Text>
            )}
          </View>
        ))}


        <View style={styles.checkboxContainer}>
          <CheckBox
            isChecked={isSelected}
            onClick={() => setSelection(!isSelected)}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>Remember me</Text>
        </View>

        <View style={styles.leftAlignedContainer}>
          <Text style={styles.helperText}>
            Save my login details for next time.
          </Text>
        </View>

        <View>
          <Button
            title={loading ? '' : 'Next'}
            onPress={onRegister}
            disabled={loading}
            loading={loading}
          />
        </View>

        {error && <Text style={styles.errorText}>{error}</Text>}

        <TouchableOpacity>
          <Text style={styles.footerText}>Need Help or Have Questions?</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  topRightImage: {
    width: '100%',
    height: 130,
    alignSelf: 'center',
    top: 0,
    left: 93,
  },
  logoText: {
    fontSize: 64,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.blue,
  },
  subtitle: {
    fontSize: 23,
    color: colors.bigBlack,
    textAlign: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: colors.jetBlack,
  },
  iconInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.ashGray,
    borderRadius: 8,
    paddingHorizontal: 12,
    color: colors.slateGray,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.slateGray,
  },
  inputWithIcon: {
    marginLeft: 10,
  },
  inputIcon: {
    marginRight: 2,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#667085',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#101828',
    fontWeight: '500',
  },
  leftAlignedContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  helperText: {
    color: '#667085',
    fontSize: 14,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  footerText: {
    color: '#5B59FE',
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 30,
  },
});
