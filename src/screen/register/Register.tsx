import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import CheckBox from 'react-native-check-box';
import { useAuth } from '../../hooks/useAuth';
import Button from '../../component/button/Button';
import { getInputs, IMAGES } from '../../constants/constants';
import { styles } from './RegisterStyle';
// import { colors } from '../../constants/colors';
import InputField from '../../component/input/InputField';

const Register = () => {
  const {  email, setEmail, password, setPassword, username, setUsername, isSelected, setSelection, onRegister } =
    useAuth();

  const inputs = getInputs(username, setUsername, email, setEmail, password, setPassword);

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
            secureTextEntry={input.secureTextEntry}
            keyboardType={input.keyboardType}
            infoText={input.helperText}
            style={styles.width}
          />
        ))}

        <View style={styles.checkboxContainer}>
          <CheckBox isChecked={isSelected} onClick={() => setSelection(!isSelected)} rightTextStyle={styles.checkboxLabel} />
          <Text style={styles.checkboxLabel}>Remember me</Text>
        </View>

        <Button title="Next" onPress={onRegister} style={styles.button}/>

        <TouchableOpacity>
          <Text style={styles.footerText}>Need Help or Have Questions?</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
