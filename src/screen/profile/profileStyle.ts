import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: colors.lightGray,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
    },
    inputWithIcon: {
      flex: 1,
      height: 50,
      fontSize: 16,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 20,
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.bigBlack,
    },
    imageContainer: {
      alignItems: 'center',
      marginBottom: 69,
    },
    profileImage: {
      width: 125,
      height: 125,
      borderRadius: 62,
      marginBottom: 10,
    },
    editIcon: {
      position: 'relative',
      top: -40,
      left: 40,
    },
    inputContainer: {
      paddingHorizontal: 20,
      marginBottom: 20,
    },
    label: {
      fontWeight: 'bold',
      fontSize: 14,
      color: colors.label,
      marginBottom: 6,
    },
    input: {
      height: 50,
      borderColor: colors.lightGray,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      fontSize: 16,
    },
    saveButton: {
      backgroundColor: colors.blue,
      paddingVertical: 15,
      borderRadius: 8,
      marginHorizontal: 20,
      marginBottom: 20,
      alignItems: 'center',
    },
    savebtnText: {
      color: colors.btnText,
      fontWeight: 'bold',
      fontSize: 23,
    },
  });
