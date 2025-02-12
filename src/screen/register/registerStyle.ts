import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/COLORS';

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
    height: 130,
    alignSelf: 'center',
    top: 0,
    left: 93,
  },
  logoText: {
    fontSize: 64,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.blue,
  },
  subtitle: {
    fontSize: 23,
    color: COLORS.bigBlack,
    textAlign: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: COLORS.jetBlack,
  },
  iconInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.ashGray,
    borderRadius: 8,
    paddingHorizontal: 12,
    color: COLORS.slateGray,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: COLORS.slateGray,
  },
  inputWithIcon: {
    marginLeft: 10,
  },
  inputIcon: {
    marginRight: 2,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#667085',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#101828',
    fontWeight: '500',
  },
  leftAlignedContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  helperText: {
    color: '#667085',
    fontSize: 14,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  footerText: {
    color: '#5B59FE',
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 30,
  },
});
