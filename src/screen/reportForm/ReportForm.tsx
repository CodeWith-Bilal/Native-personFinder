import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {useReport} from '../../hooks/useReport';
import {Header} from '../../component/header/Header';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import BasicDetailsSection from '../../component/basicDetails/BasicDetails';
import PhotoUpload from '../../component/photoUpload/PhotoUpload';
import {PHYSICAL_DESCRIPTION_FEILDS} from '../../constants/constants';

type CustomDateTimePickerEvent = any;
import LastSeen from '../../component/lastSeen/LastSeen';
import {styles} from './ReportStyle';

export default function ReportMissingPerson() {
  const navigation = useAppNavigation();
  const {
    formData,
    showDatePicker,
    setShowDatePicker,
    showPicker,
    setShowPicker,
    date,
    setDate,
    handleInputChange,
    selectPhoto,
    submitReport,
    isloading,
  } = useReport();
  const physicalDescriptionFields = PHYSICAL_DESCRIPTION_FEILDS(
    formData,
    handleInputChange,
  );
  function handleDateChange(event: CustomDateTimePickerEvent, selectedDate?: Date | undefined): void {
    if (selectedDate) {
      setDate(selectedDate);
      setShowDatePicker(false);
    }
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header
        title="Missing Person Details"
        onBackPress={() => navigation.goBack()}
      />
      <Text style={styles.title}>Basic Details of Missing Person</Text>

      <BasicDetailsSection
        lastLocation={formData?.lastLocation}
        formData={formData}
        handleInputChange={handleInputChange}
        showDatePicker={showDatePicker}
        setShowDatePicker={setShowDatePicker}
        handleDateChange={handleDateChange}
      />

      <LastSeen
        lastSeen={formData?.lastSeen}
        showPicker={showPicker}
        date={date}
        handleInputChange={handleInputChange}
        setShowPicker={setShowPicker}
        setDate={setDate}
      />

      <Text style={styles.title}>Physical Description</Text>

      {physicalDescriptionFields.map((field, index) => (
        <View key={index}>
          <Text style={styles.label}>{field.label}</Text>
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            placeholder={field.placeholder}
            style={styles.input}
          />
        </View>
      ))}

      <PhotoUpload
        photo={formData?.photo}
        selectPhoto={selectPhoto}
        isloading={isloading}
      />

      <View style={styles.horizontalLine} />

      <View style={styles.alignButton}>
        <TouchableOpacity style={styles.submitButton} onPress={submitReport}>
          <Text style={styles.submitbtnText}>Submit Report</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
