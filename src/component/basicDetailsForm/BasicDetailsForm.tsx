import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {IMAGES} from '../../constants/constants';
import useGenderDropdown from '../../hooks/useBasicDetailsForm';
import {BasicDetailsProps} from '../../types/types';
import { colors } from '../../constants/colors';

const BasicDetailsSection: React.FC<BasicDetailsProps> = ({
  formData,
  handleInputChange,
  showDatePicker,
  setShowDatePicker,
  handleDateChange,
}) => {
  const {genderDropdownVisible, toggleGenderDropdown} = useGenderDropdown();
  const dateOfBirthDate = new Date(formData?.dateOfBirth);

  return (
    <View>
      <Text style={styles.label}>Missing Person's Full Name</Text>
      <TextInput
        value={formData?.fullName}
        onChangeText={text => handleInputChange('fullName', text)}
        placeholder="Missing Person's Full Name"
        style={styles.input}
      />

      <Text style={styles.label}>Gender</Text>
      <TouchableOpacity style={styles.dropdown} onPress={toggleGenderDropdown}>
        <Text style={styles.dropdownText}>
          {formData?.gender || 'Select Gender'}
        </Text>
        <Image source={IMAGES?.down} style={styles.dropdownIcon} />
      </TouchableOpacity>
      {genderDropdownVisible && (
        <View style={styles.dropdownOptions}>
          {['Male', 'Female', 'Trans']?.map(gender => (
            <TouchableOpacity
              key={gender}
              style={styles.dropdownOption}
              onPress={() => {
                handleInputChange('gender', gender);
                toggleGenderDropdown();
              }}>
              <Text style={styles.dropdownOptionText}>{gender}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <Text style={styles.label}>Date of Birth</Text>
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={styles.dateInput}>
        <Text>{dateOfBirthDate?.toLocaleDateString() || 'Select Date'}</Text>
        <Image style={styles.icon} source={IMAGES?.calender} />
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={dateOfBirthDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <Text style={styles.label}>Nickname or Known Aliases</Text>
      <TextInput
        value={formData?.nickname}
        onChangeText={text => handleInputChange('nickname', text)}
        placeholder="Nickname or Known Aliases"
        style={styles.input}
      />
<Text style={styles.label}>Last Seen Location</Text>
      <TextInput
              value={formData?.lastLocation}
              onChangeText={(text) => handleInputChange('lastLocation', text)}
              placeholder="Last Location"
              style={styles.input}
            />
    </View>
  );
};

export default BasicDetailsSection;

export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    gap: 10,
  },
  label: {
    color: colors.black,
    fontWeight: '500',
    fontSize: 14,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 16,
    color: colors.black,
  },
  dropdownIcon: {
    width: 20,
    height: 20,
  },
  dropdownOptions: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 5,
    marginBottom: 15,
  },
  dropdownOption: {
    padding: 10,
  },
  dropdownOptionText: {
    fontSize: 16,
    color: colors.black,
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.lightGray,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  icon: {
    marginLeft: 23,
  },
});

