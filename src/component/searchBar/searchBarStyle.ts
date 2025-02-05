import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,
      borderColor: colors.lightGray,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    searchInput: {
      flex: 1,
      height: 40,
      fontSize: 14,
      paddingVertical: 5,
      color: colors.bigBlack,
    },
  });
