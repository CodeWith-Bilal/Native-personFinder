import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: COLORS.white,
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
    fontFamily: 'Familjen Grotesk',
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 4,
    color: COLORS.black,
  },
  details: {
    fontFamily: 'Familjen Grotesk',
    fontSize: 16,
    marginBottom: 2,
    fontWeight: '400',
    color: COLORS.black,
  },
  detailsButton: {
    width: 95,
    height: 26,
    marginTop: 8,
    backgroundColor: COLORS.blue,
    paddingVertical: 5,
    borderRadius: 8,
  },
  detailsbtnText: {
    color: COLORS.white,
    fontSize: 11,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    textAlign: 'center',
  },
});
