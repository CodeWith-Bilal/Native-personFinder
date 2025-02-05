import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

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
      color: colors.black,
    },
  });
