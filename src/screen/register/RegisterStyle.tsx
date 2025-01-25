import {StyleSheet} from 'react-native';
import { colors } from '../../constants/colors';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    scrollContainer: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    topRightImage: {
      width: '100%',
      height: 160,
      alignSelf: 'center',
      top: 0,
      left :93,
    },
    logoText: {
      fontSize: 64,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#5B59FE',
    },
    subtitle: {
      fontSize: 23,
      color: '#666',
      textAlign: 'center',
      marginBottom: 30,
    },
    inputContainer: {
      marginBottom: 10,
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
      color: '#333',
    },
    input: {
      borderWidth: 1,
      borderColor: '#d0d5dd',
      borderRadius: 8,
      padding: 12,
      color: '#333',
      fontSize: 16,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    width:{
width:'auto',
    },
    checkboxLabel: {
      marginLeft: 8,
      fontSize: 16,
      color: '#333',
    },
    leftAlignedContainer: {
      alignItems: 'flex-start',
      marginBottom: 20,
    },
    helperText: {
      color: '#667085',
      fontSize: 14,
    },
    button: {
      backgroundColor: colors.skyBlue,
      width:'100%',
      padding: 9,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    footerText: {
      color: '#5B59FE',
      fontSize: 16,
      textAlign: 'center',
      textDecorationLine: 'underline',
    },
  inputWithIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.charcoal,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: colors.charcoal, // Adjust the color of the icon
  },
  // input: {
  //   flex: 1,
  //   fontSize: 16,
  //   color: colors.black,
  });
