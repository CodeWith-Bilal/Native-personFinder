// InputField.tsx
import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { colors } from '../../constants/colors';

interface InputFieldProps extends TextInputProps {
  label?: string;
  helperText?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  helperText,
  ...rest
}) => {
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholderTextColor={colors.charcoal}
        {...rest}
      />
      {helperText && <Text style={styles.helperText}>{helperText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.label,
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: colors.black,
  },
  helperText: {
    fontSize: 14,
    color: colors.charcoal,
    marginTop: 5,
  },
});

export default InputField;
