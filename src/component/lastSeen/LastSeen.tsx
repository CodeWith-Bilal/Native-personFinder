import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { LastSeenProps } from '../../types/types';
import { colors } from '../../constants/colors';

const LastSeen: React.FC<LastSeenProps> = ({
  lastSeen,
  date,
  handleInputChange,
  setDate,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  // Helper function to format date and time in PST
  const formatDateToPST = (date: Date): string => {
    return new Intl.DateTimeFormat('en-PK', {
      timeZone: 'Asia/Karachi',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(date);
  };

  const onDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (Platform.OS === 'android') setShowDatePicker(false); // Close date picker after selection on Android
    if (selectedDate) {
      setDate(selectedDate); // Temporarily save the date
      // Alert.alert('Date Selected', `You selected: ${formatDateToPST(selectedDate)}`);
      setShowTimePicker(true); // Open the time picker after date selection
    }
  };

  const onTimeChange = (event: DateTimePickerEvent, selectedTime?: Date) => {
    if (Platform.OS === 'android') setShowTimePicker(false); // Close time picker after selection on Android
    if (selectedTime) {
      // Combine the selected time with the previously selected date
      const finalDateTime = new Date(date || new Date());
      finalDateTime.setHours(selectedTime.getHours());
      finalDateTime.setMinutes(selectedTime.getMinutes());

      setDate(finalDateTime); // Update the state with the full date and time
      handleInputChange('lastSeen', formatDateToPST(finalDateTime)); // Save in PST format
      // Alert.alert('Date and Time Selected', `You selected: ${formatDateToPST(finalDateTime)}`);
    }
  };

  return (
    <View>
      <View>
        <Text style={styles.label}>Last Seen</Text>
        <TextInput
          value={lastSeen}
          onFocus={() => setShowDatePicker(true)} // Open date picker when input is focused
          placeholder="Last Seen"
          style={styles.input}
        />

        {/* Date Picker */}
        {showDatePicker && (
          <DateTimePicker
            value={date || new Date()}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}

        {/* Time Picker */}
        {showTimePicker && (
          <DateTimePicker
            value={date || new Date()}
            mode="time"
            display="default"
            onChange={onTimeChange}
          />
        )}
      </View>
    </View>
  );
};

export default LastSeen;

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
