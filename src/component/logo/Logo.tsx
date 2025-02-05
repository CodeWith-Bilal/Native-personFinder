import React from 'react';
import {Text} from 'react-native';
import {LogoProps} from '../../types/types';
import { styles } from './logoStyle';

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

