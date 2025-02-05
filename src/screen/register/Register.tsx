import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import {useAuth} from '../../hooks/useAuth';
import Button from '../../component/button/Button';
import {getInputs} from '../../constants/constants';
import {IMAGES} from '../../constants/constants';
import {colors} from '../../constants/colors';
import { styles } from './registerStyle';

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
