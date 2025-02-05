import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    button: {
      height:52,
      backgroundColor: colors.blue,
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    disabledButton: {
      backgroundColor: colors.blue,
    },
    text: {
      color: 'white',
      fontSize: 18,
      fontWeight: 600,
      fontFamily:'Montserrat',
    },
  });
