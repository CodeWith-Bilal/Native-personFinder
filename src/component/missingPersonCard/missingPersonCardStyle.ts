import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      padding: 16,
      backgroundColor: colors.white,
      borderRadius: 10,
      marginBottom: 16,
    },
    image: {
      width: 115,
      height: 154,
      borderRadius: 8,
      marginRight: 16,
    },
    info: {
      flex: 1,
    },
    name: {
      fontFamily:'Familjen Grotesk',
      fontSize: 16,
      fontWeight: '400',
      marginBottom: 4,
      color: colors.black,
    },
    details: {
      fontFamily:'Familjen Grotesk',
      fontSize: 16,
      marginBottom: 2,
      fontWeight: '400',
      color: colors.black,
    },
    detailsButton: {
      width: 95,
      height: 26,
      marginTop: 8,
      backgroundColor: colors.blue,
      paddingVertical: 5,
      borderRadius: 8,
    },
    detailsbtnText: {
      color: colors.white,
      fontSize: 11,
      fontFamily:'Montserrat',
      fontWeight: '500',
      textAlign: 'center',
    },
  });
