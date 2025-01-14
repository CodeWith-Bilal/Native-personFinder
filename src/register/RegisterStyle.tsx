import {StyleSheet} from 'react-native';
// import {colors} from '../../constants/colors';
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
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
      color: '#5B59FE',
    },
    subtitle: {
      fontSize: 16,
      color: '#666',
      textAlign: 'center',
      marginBottom: 30,
    },
    inputContainer: {
      marginBottom: 20,
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
      backgroundColor: '#000',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 20,
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
  });
