import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    fontWeight: '400',
    color: COLORS.black,
    fontFamily: 'Familjen Grotesk',
    marginBottom: 16,
    marginTop: 16,
  },
  photoUpload: {
    borderWidth: 2,
    borderColor: COLORS.blue,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    height: 173,
    backgroundColor: COLORS.white,
    borderStyle: 'dashed',
  },
  uploadContent: {
    alignItems: 'center',
  },
  uploadIcon: {
    marginBottom: 10,
  },
  uploadText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  browseText: {
    color: COLORS.blue,
    fontSize: 16,
    fontWeight: '400',
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  format: {
    color: COLORS.black,
    fontSize: 11,
    fontWeight: '400',
  },
});
