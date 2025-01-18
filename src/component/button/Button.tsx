import React from 'react';
import { TouchableOpacity, Text,TouchableOpacityProps, StyleSheet } from 'react-native';
// import {styles} from "./ButtonStyles"
import { colors } from '../../constants/colors';
interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, style, ...props }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;


export const styles = StyleSheet.create({
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
});
