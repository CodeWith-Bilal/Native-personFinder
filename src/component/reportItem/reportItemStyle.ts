import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  reportCard: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: COLORS.white,
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
    fontFamily: 'Familjen Grotesk',
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.black,
  },
  reportReporter: {
    fontFamily: 'Familjen Grotesk',
    fontSize: 16,
    marginTop: 4,
    fontWeight: '400',
    color: COLORS.black,
  },
  reportLocation: {
    fontFamily: 'Familjen Grotesk',
    fontSize: 16,
    marginTop: 4,
    fontWeight: '400',
    color: COLORS.black,
  },
  reportDescription: {
    fontFamily: 'Familjen Grotesk',
    fontSize: 16,
    marginTop: 4,
    fontWeight: '400',
    color: COLORS.black,
  },
  contactButton: {
    width: 101,
    marginTop: 17,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
  },
  contactbtnText: {
    color: COLORS.white,
    fontSize: 11,
    textAlign: 'center',
  },
});
