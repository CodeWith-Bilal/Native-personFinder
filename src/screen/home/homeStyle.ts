import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  noDataText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  profilesContainer: {
    margin: '5%',
    flexDirection: 'row',
    backgroundColor: COLORS.white,
  },
  profileCard: {
    backgroundColor: COLORS.white,
    width: 200,
    marginRight: 15,
    borderRadius: 10,
  },
  profileImage: {
    width: '100%',
    height: 304,
    borderRadius: 10,
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  detailsOverly: {
    backgroundColor: COLORS.overlay,
    borderRadius: 10,
  },
  missingText: {
    backgroundColor: COLORS.crimson,
    color: COLORS.white,
    fontSize: 32,
    fontWeight: '400',
    padding: 5,
    textAlign: 'center',
    borderRadius: 5,
  },
  profileDetails: {
    fontWeight: '400',
    backgroundColor: COLORS.overlay,
    width: 200,
    fontSize: 11,
    color: 'white',
    position: 'absolute',
    bottom: 34,
    padding: 16,
  },
  detailsButton: {
    backgroundColor: COLORS.blue,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: 78,
    height: 24,
    padding: 5,
  },
  detailsbtnText: {
    color: COLORS.white,
    fontSize: 11,
  },
});
