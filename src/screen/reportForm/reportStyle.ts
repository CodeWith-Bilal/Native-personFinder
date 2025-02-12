import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: COLORS.black,
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 23,
    fontWeight: '400',
    color: COLORS.black,
    fontFamily: 'Familjen Grotesk',
    marginBottom: 16,
    marginTop: 16,
  },
  label: {
    color: COLORS.black,
    fontWeight: '500',
    fontSize: 14,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
  },
  submitButton: {
    width: width * 0.6,
    backgroundColor: COLORS.blue,
    paddingHorizontal: 17,
    paddingVertical: 7,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitbtnText: {
    color: COLORS.btnText,
    fontSize: width > 350 ? 23 : 18,
    fontWeight: '500',
    fontFamily: 'Montserrat',
  },
  alignButton: {
    alignItems: 'center',
  },
});
