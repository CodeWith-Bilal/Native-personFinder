import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  bottomImage: {
    position: 'absolute',
    bottom: 0,
    marginTop:10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: colors.whitish,
  },
  logo: {
    fontSize: 64,
    fontWeight: '700',
    color: colors.skyBlue,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.skyBlue,
    left: 30,
    top: -17,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 45,
    fontWeight: '700',
    color: colors.bigBlack,
    marginBottom: 30,
    marginTop: 15,
    fontFamily: 'Familjen Grotesk',
  },
  inputLabelContainer: {
    width: '80%',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.label,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.ashGray,
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '100%',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.slateGray,
  },
  icon: {
    marginRight: 10,
  },
  infoText: {
    fontWeight: '400',
    fontSize: 14,
    color: colors.slateGray,
    marginBottom: 20,
    width: '80%',
  },

  button: {
    width: '80%',
    height: 52,
    backgroundColor: colors.skyBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 23,
    fontWeight: '600',
    fontFamily: 'Montserrat',
  },

  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  link: {
    marginTop: 21,
    fontFamily: 'Familjen Grotesk',
    fontSize: 11,
    color: colors.bigBlack,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  linkSeparator: {
    marginHorizontal: 10,
    color: colors.bigBlack,
    marginTop: 21,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    width: '80%',
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.bigBlack,
  },
  orText: {
    fontFamily: 'Familjen Grotesk',
    fontWeight: '400',
    fontSize: 16,
    color: colors.bigBlack,
    marginHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.orBack,
    padding: 10,
    backgroundColor: colors.orBack,
  },
});
