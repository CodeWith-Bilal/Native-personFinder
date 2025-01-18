import React from 'react';
import {StyleSheet, Text} from 'react-native';
// import {styles} from './LogoStyles';
import {LogoProps} from '../../types/types';

export const Logo: React.FC<LogoProps> = ({color, size}) => {
  return (
    <>
      <Text
        style={[styles.logo, {color, fontSize: size ? parseInt(size) : 45}]}>
        Findr
      </Text>
      <Text style={[styles.subtitle, {color}]}>Search for hope</Text>
    </>
  );
};
export const styles = StyleSheet.create({
  logo: {
    fontFamily: 'Familjen Grotesk',
    fontWeight: '700',
  },
  subtitle: {
    fontFamily: 'Satisfy',
    fontSize: 18,
    fontWeight: '400',
    position: 'relative',
    left: 30,
    top: -17,
  },
});
