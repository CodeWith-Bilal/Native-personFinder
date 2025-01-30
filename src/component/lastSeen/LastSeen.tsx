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
    if (Platform.OS === 'android') {setShowDatePicker(false);}
    if (selectedDate) {
      setDate(selectedDate);
      setShowTimePicker(true);
    }
  };

  const onTimeChange = (event: DateTimePickerEvent, selectedTime?: Date) => {
    if (Platform.OS === 'android') {setShowTimePicker(false);}
    if (selectedTime) {
      const finalDateTime = new Date(date || new Date());
      finalDateTime.setHours(selectedTime.getHours());
      finalDateTime.setMinutes(selectedTime.getMinutes());

      setDate(finalDateTime);
      handleInputChange('lastSeen', formatDateToPST(finalDateTime));
    }
  };

  return (
    <View>
      <View>
        <Text style={styles.label}>Last Seen</Text>
        <TextInput
          value={lastSeen}
          onFocus={() => setShowDatePicker(true)}
          placeholder="Last Seen"
          style={styles.input}
        />

        {showDatePicker && (
          <DateTimePicker
            value={date || new Date()}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}

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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    gap: 10,
  },
});
