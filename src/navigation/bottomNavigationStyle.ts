import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabBarStyle: {
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 26,
    paddingRight: 26,
    height: 62,
    margin: '10%',
    marginTop: 17,
    backgroundColor: 'white',
    borderRadius: 42,
    borderWidth: 2,
    borderTopWidth: 2,
    borderColor: COLORS.black,
  },
  tabBarLabel: {
    fontSize: 12,
    color: COLORS.black,
    fontWeight: '400',
  },
  iconStyle: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
