import React from 'react';
import { View, Text, TextInput, Image, TextInputProps } from 'react-native';
import { styles } from './inputFieldStyle';

interface InputFieldProps extends TextInputProps {
  label: string;
  icon?: any;
  infoText?: string | null;
}

const InputField: React.FC<InputFieldProps> = ({ label, icon, infoText, ...textInputProps }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {icon && <Image source={icon} style={styles.icon} />}
        <TextInput style={styles.input} {...textInputProps} />
      </View>
      {infoText && <Text style={styles.infoText}>{infoText}</Text>}
    </View>
  );
};

export default InputField;

