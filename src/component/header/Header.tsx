import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { IMAGES } from '../../constants/constants';
import { styles } from './headerStyle';

interface HeaderProps {
  title: string;
  onBackPress: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onBackPress }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onBackPress}>
        <Image source={IMAGES?.back} />
      </TouchableOpacity>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
};

