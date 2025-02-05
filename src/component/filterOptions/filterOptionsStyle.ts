import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: 16,
    },
    filterText: {fontSize: 14, fontWeight: 'bold', color: colors.black},
    filterButton: {
      backgroundColor: colors.filter,
      paddingVertical: 8,
      paddingHorizontal: 12,
      shadowColor: colors.shadow,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.09,
      shadowRadius: 2,
      elevation: 2,
    },
    filterbtnText: {fontSize: 14, fontWeight: 'bold', color: colors.label},
  });
