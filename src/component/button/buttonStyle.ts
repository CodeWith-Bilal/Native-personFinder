import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  button: {
    height: 52,
    backgroundColor: COLORS.blue,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: COLORS.blue,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
    fontFamily: 'Montserrat',
  },
});
