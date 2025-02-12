import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  inputWithIcon: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.bigBlack,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 69,
  },
  profileImage: {
    width: 125,
    height: 125,
    borderRadius: 62,
    marginBottom: 10,
  },
  editIcon: {
    position: 'relative',
    top: -40,
    left: 40,
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
    color: COLORS.label,
    marginBottom: 6,
  },
  input: {
    height: 50,
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: COLORS.blue,
    paddingVertical: 15,
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  savebtnText: {
    color: COLORS.btnText,
    fontWeight: 'bold',
    fontSize: 23,
  },
});
