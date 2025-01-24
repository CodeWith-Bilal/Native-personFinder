// components/InputField.tsx

import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TextInputProps } from 'react-native';
import { colors } from '../../constants/colors';

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

const styles = StyleSheet.create({
//   inputLabelContainer: {
//     width: '100%',
//     marginBottom: 10,
//   },
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
});
