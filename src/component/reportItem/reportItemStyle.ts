import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    reportCard: {
      flexDirection: 'row',
      marginBottom: 20,
      backgroundColor: colors.white,
      padding: 16,
    },
    reportImage: {
      width: 115,
      height: 154,
      borderRadius: 10,
      marginRight: 16,
    },
    reportDetails: {
      flex: 1,
    },
    reportName: {
      fontFamily:'Familjen Grotesk',
      fontSize: 16,
      fontWeight: '400',
      color: colors.black,
    },
    reportReporter: {
      fontFamily:'Familjen Grotesk',
      fontSize: 16,
      marginTop: 4,
      fontWeight: '400',
      color: colors.black,
    },
    reportLocation: {
      fontFamily:'Familjen Grotesk',
      fontSize: 16,
      marginTop: 4,
      fontWeight: '400',
      color: colors.black,
    },
    reportDescription: {
      fontFamily:'Familjen Grotesk',
      fontSize: 16,
      marginTop: 4,
      fontWeight: '400',
      color: colors.black,
    },
    contactButton: {
      width: 101,
      marginTop: 17,
      paddingVertical: 5,
      paddingHorizontal: 10,
      backgroundColor: colors.blue,
      borderRadius: 5,
    },
    contactbtnText: {
      color: colors.white,
      fontSize: 11,
      textAlign: 'center',
    },
  });
