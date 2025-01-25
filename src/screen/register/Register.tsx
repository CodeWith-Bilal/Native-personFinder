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
import {styles} from './RegisterStyle';
import {colors} from '../../constants/colors';
const Register = () => {
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
          source={IMAGES.regVector}
          style={styles.topRightImage}
          resizeMode="contain"
        />
        <Text style={styles.logoText}>Findr</Text>
        <Text style={styles.subtitle}>Join the Search for Hope</Text>

        {inputs.map(
          (
            {
              label,
              placeholder,
              value,
              onChangeText,
              secureTextEntry,
              helperText,
              keyboardType,
            },
            index,
          ) => (
            <View key={index} style={styles.inputContainer}>
              <Text style={styles.label}>{label}</Text>
              <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                placeholderTextColor={colors.charcoal}
              />
              {helperText && (
                <Text style={styles.helperText}>{helperText}</Text>
              )}
            </View>
          ),
        )}

        <View style={styles.checkboxContainer}>
          <CheckBox
            isChecked={isSelected}
            onClick={() => setSelection(!isSelected)}
            rightTextStyle={styles.checkboxLabel}
          />
          <Text style={styles.checkboxLabel}>Remember me</Text>
        </View>

        <View style={styles.leftAlignedContainer}>
          <Text style={styles.helperText}>
            Save my login details for next time.
          </Text>
        </View>

        <View style={styles.width}>
        <Button
          title={loading ? '' : 'Next'}
          onPress={onRegister}
          disabled={loading}
          loading={loading}
        />
        </View>


        <TouchableOpacity>
          <Text style={styles.footerText}>Need Help or Have Questions?</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
