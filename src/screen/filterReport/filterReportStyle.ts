import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      padding: 16,
    },
    errorText: {
      color: colors.crimson,
      textAlign: 'center',
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    noDataText: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
      color: colors.crimson,
    },
    listContent: {
      paddingBottom: 20,
    },
  });
