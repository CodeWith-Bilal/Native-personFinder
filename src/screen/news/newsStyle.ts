import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      paddingHorizontal: 16,
      paddingTop: 20,
    },
    listContainer: {
      paddingBottom: 20,
    },
    noDataText: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
      color: colors.crimson,
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
