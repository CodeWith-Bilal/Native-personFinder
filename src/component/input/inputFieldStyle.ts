import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
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
