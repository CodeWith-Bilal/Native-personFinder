import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  btn: {
    width: 280,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  headerWrapper: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 20,
    marginLeft: 30,
  },
  image: {
    alignSelf: 'center',
    marginBottom: 34,
  },
  instructions: {
    fontFamily: 'Familjen Grotesk',
    fontSize: 16,
    fontWeight: '400',
    color: colors.onyx,
    marginBottom: 24,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: colors.jetBlack,
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderGray,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 20,
    width: '80%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.slateGray,
    height: 40,
  },
});
