import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    label: {
      color: colors.black,
      fontWeight: '500',
      fontSize: 14,
      marginBottom: 6,
    },
    input: {
      borderWidth: 1,
      borderColor: colors.lightGray,
      padding: 10,
      borderRadius: 5,
      marginBottom: 15,
      fontSize: 16,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
      gap: 10,
    },
  });
