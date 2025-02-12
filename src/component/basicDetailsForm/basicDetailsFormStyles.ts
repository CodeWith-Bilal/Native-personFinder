import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    gap: 10,
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
  dropdown: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 16,
    color: COLORS.black,
  },
  dropdownIcon: {
    width: 20,
    height: 20,
  },
  dropdownOptions: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 5,
    marginBottom: 15,
  },
  dropdownOption: {
    padding: 10,
  },
  dropdownOptionText: {
    fontSize: 16,
    color: COLORS.black,
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  icon: {
    marginLeft: 23,
  },
});
