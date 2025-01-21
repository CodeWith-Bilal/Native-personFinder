
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {IMAGES} from '../../constants/constants';
import { colors } from '../../constants/colors';
interface HeaderProps {
  title: string;
  onBackPress: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBackPress }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onBackPress}>
        <Image source={IMAGES?.back} />
      </TouchableOpacity>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
};

export default Header;
export const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,
    },
    header: {
      fontSize: 23,
      fontWeight: 'bold',
      marginLeft: 19,
      color: colors.charcoal,
    },
  });

