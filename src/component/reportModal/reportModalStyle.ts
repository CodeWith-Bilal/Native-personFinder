import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.transparent,
    },
    modalContent: {
      width: '90%',
      height: '73%',
      backgroundColor: colors.white,
      borderRadius: 8,
      padding: 20,
      alignItems: 'center',
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 1,
    },
    closebtnText: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    modalImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 16,
    },
    modalDetails: {
      fontSize: 14,
      fontWeight: '400',
      marginBottom: 4,
      textAlign: 'center',
      color: colors.black,
      fontFamily: 'Familjen Grotesk',
    },
    modalInput: {
      width: '100%',
      height: 40,
      borderColor: colors.black,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 8,
      marginBottom: 8,
      marginTop: 16,
    },
    modalButton: {
      backgroundColor: colors.white,
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 8,
      marginTop: 16,
      width: '100%',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.blue,
    },
    modalbtnText: {
      color: colors.blue,
      fontWeight: '500',
      fontFamily: 'Montserrat',
    },
    modalButtonReport: {
      color: colors.white,
      fontWeight: '500',
      fontFamily: 'Montserrat',
    },
    buttonAlign: {
      marginTop: '20%',
    },
  });
