import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-check-box';
import { useAuth } from '../../hooks/useAuth';
import Button from '../../component/button/Button';
import { getInputs } from '../../constants/constants';
import { IMAGES } from '../../constants/constants';
import { styles } from './RegisterStyle';
import InputField from '../../component/input/InputField';

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
    onregister,
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
        <Image source={IMAGES.regVector} style={styles.topRightImage} resizeMode="contain" />
        <Text style={styles.logoText}>Findr</Text>
        <Text style={styles.subtitle}>Join the Search for Hope</Text>

        {inputs.map((input, index) => (
          <InputField
            key={index}
            label={input.label}
            placeholder={input.placeholder}
            value={input.value}
            onChangeText={input.onChangeText}
            secureTextEntry={input.secureTextEntry || false}
            keyboardType={input.keyboardType || 'default'}
            helperText={input.helperText || ''}
          />
        ))}

        <View style={styles.checkboxContainer}>
          <CheckBox isChecked={isSelected} onClick={() => setSelection(!isSelected)} />
          <Text style={styles.checkboxLabel}>Remember me</Text>
        </View>

        <View style={styles.leftAlignedContainer}>
          <Text style={styles.helperText}>Save my login details for next time.</Text>
        </View>

        <Button title="Next" onPress={onregister} />

        <TouchableOpacity>
          <Text style={styles.footerText}>Need Help or Have Questions?</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
