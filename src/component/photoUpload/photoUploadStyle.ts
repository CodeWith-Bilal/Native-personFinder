import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    title: {
      fontSize: 23,
      fontWeight: '400',
      color: colors.black,
      fontFamily: 'Familjen Grotesk',
      marginBottom: 16,
      marginTop: 16,
    },
    photoUpload: {
      borderWidth: 2,
      borderColor: colors.blue,
      borderRadius: 10,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      height: 173,
      backgroundColor: colors.white,
      borderStyle: 'dashed',
    },
    uploadContent: {
      alignItems: 'center',
    },
    uploadIcon: {
      marginBottom: 10,
    },
    uploadText: {
      color: colors.black,
      fontSize: 16,
      fontWeight: '400',
      textAlign: 'center',
    },
    browseText: {
      color: colors.blue,
      fontSize: 16,
      fontWeight: '400',
    },
    uploadedImage: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
    },
    format: {
      color: colors.black,
      fontSize: 11,
      fontWeight: '400',
    },
  });
