import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { LastSeenSectionProps } from '../../types/types';
import { colors } from '../../constants/colors';

const LastSeenSection: React.FC<LastSeenSectionProps> = ({
  lastLocation,
  lastSeen,
  showPicker,
  date,
  handleInputChange,
  setDate,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const { type } = event;

    if (Platform.OS === 'android' && type === 'set') {
      // Hide pickers when a date or time is selected on Android
      setShowDatePicker(false);
      setShowTimePicker(false);
    }

    // If a date or time is selected, update the form data and state
    if (selectedDate) {
      setDate(selectedDate);
      handleInputChange('lastSeen', selectedDate.toLocaleString()); // Update the 'lastSeen' field
    }
  };

  return (
    <View>
      <Text style={styles.label}>Last Seen Location</Text>
      <TextInput
        value={lastLocation}
        onChangeText={(text) => handleInputChange('lastLocation', text)}
        placeholder="Last Location"
        style={styles.input}
      />

      <View>
        <Text style={styles.label}>Last Seen</Text>
        <TextInput
          value={lastSeen}
          onFocus={() => {
            setShowDatePicker(true); // Show the date picker when the input is focused
            setShowTimePicker(false); // Ensure the time picker is hidden when date is focused
          }}
          placeholder="Last Seen"
          style={styles.input}
        />

        {/* Date Picker for Android */}
        {showDatePicker && Platform.OS === 'android' && (
          <DateTimePicker
            value={date || new Date()}
            mode="date"
            display="default"
            onChange={onChange}
            style={{ width: '100%' }}
          />
        )}

        {/* Time Picker for Android */}
        {showTimePicker && Platform.OS === 'android' && (
          <DateTimePicker
            value={date || new Date()}
            mode="time"
            display="default"
            onChange={onChange}
            style={{ width: '100%' }}
          />
        )}

        {/* For iOS, single datetime picker */}
        {Platform.OS === 'ios' && showPicker && (
          <DateTimePicker
            value={date || new Date()}
            mode="datetime"
            display="spinner"
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
};

export default LastSeenSection;

export const styles = StyleSheet.create({
  label: {
    color: colors.charcoal,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    gap: 10,
  },
});
