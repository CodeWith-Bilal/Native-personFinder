import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {useReportHook} from '../../hooks/useReport';
import Header from '../../component/header/Header';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import BasicDetailsSection from '../../component/basicDetailsForm/BasicDetailsForm';
import PhotoUpload from '../../component/photoUpload/PhotoUpload';
import {getPhysicalDescriptionFields} from '../../constants/constants';
import LastSeen from '../../component/lastSeen/LastSeen';
import { colors } from '../../constants/colors';
const { width } = Dimensions.get('window');

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
    handleDateChange,
    selectPhoto,
    submitReport,
    isloading,

  } = useReportHook();
  const physicalDescriptionFields = getPhysicalDescriptionFields(
    formData,
    handleInputChange,
  );
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

      <PhotoUpload photo={formData?.photo} selectPhoto={selectPhoto}  isloading={isloading} />

      <View style={styles.horizontalLine} />

      <View style={styles.alignButton}>
        <TouchableOpacity style={styles.submitButton} onPress={submitReport}>
          <Text style={styles.submitbtnText}>Submit Report</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: colors.white,
  },

  title: {
    fontSize: 23,
    fontWeight: '400',
    color: colors.black,
    fontFamily: 'Familjen Grotesk',
    marginBottom: 16,
    marginTop: 16,
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

  submitButton: {
     width: width * 0.6,
    backgroundColor: colors.blue,
    paddingHorizontal: 17,
    paddingVertical: 7,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitbtnText: {
    color: colors.btnText,
   fontSize: width > 350 ? 23 : 18,
    fontWeight: '500',
    fontFamily: 'Montserrat',
  },

  alignButton: {
    alignItems: 'center',
  },
});
