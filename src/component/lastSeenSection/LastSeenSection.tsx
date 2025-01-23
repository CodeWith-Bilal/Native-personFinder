import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {LastSeenSectionProps} from '../../types/types';
import {colors} from '../../constants/colors';
const LastSeenSection: React.FC<LastSeenSectionProps> = ({
  lastLocation,
  lastSeen,
  showPicker,
  date,
  handleInputChange,
  setShowPicker,
  setDate,
}) => {
  return (
    <View>
      <Text style={styles.label}>Last Seen Location</Text>
      <TextInput
        value={lastLocation}
        onChangeText={text => handleInputChange('lastLocation', text)}
        placeholder="Last Location"
        style={styles.input}
      />

      <View>
        <Text style={styles.label}>Last Seen</Text>
        <TextInput
          value={lastSeen}
          onFocus={() => setShowPicker(true)}
          placeholder="Last Seen"
          style={styles.input}
        />

        {showPicker && (
          <DatePicker date={date} mode="datetime" onDateChange={setDate} />
        )}

        {showPicker && (
          <View style={styles.buttonContainer}>
            <Button
              title="Confirm"
              onPress={() => {
                handleInputChange('lastSeen', date.toLocaleString());
                setShowPicker(false);
              }}
            />
            <Button
              title="Cancel"
              onPress={() => setShowPicker(false)}
              color={colors.crimson}
            />
          </View>
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