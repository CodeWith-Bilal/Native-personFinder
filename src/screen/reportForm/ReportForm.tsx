import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useReportManager} from '../../hooks/useReportManager';
import Header from '../../component/header/Header';
import BasicDetailsSection from '../../component/basicDetailsForm/BasicDetailsForm';
import PhotoUploadSection from '../../component/photoUploadSection/PhotoUploadSection';
import {getPhysicalDescriptionFields} from '../../constants/constants';
import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../constants/colors';
import { useAppNavigation } from '../../utils/AppNavigation';

const {width} = Dimensions.get('window');

export default function ReportForm() {
  const {
    formData,
    showDatePicker,
    setShowDatePicker,
    handleInputChange,
    handleDateChange,
    selectPhoto,
    submitReport,
    isLoading,
  } = useReportManager();

  const physicalDescriptionFields = getPhysicalDescriptionFields(
    formData,
    handleInputChange,
  );
const navigation = useAppNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="Report Missing Person" onBackPress={() => navigation.goBack()}/>

      <Text style={styles.title}>Basic Details</Text>
      <BasicDetailsSection
        formData={formData}
        handleInputChange={handleInputChange}
        showDatePicker={showDatePicker}
        setShowDatePicker={setShowDatePicker}
        handleDateChange={handleDateChange}
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

      <PhotoUploadSection
        photo={formData.photo}
        selectPhoto={selectPhoto}
        isloading={isLoading}
      />

      <View style={styles.horizontalLine} />

      <View style={styles.alignButton}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={submitReport}
          disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator color={colors.buttonText} />
          ) : (
            <Text style={styles.submitButtonText}>Submit Report</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: colors.whitish,
  },
  horizontalLine: {
    borderBottomColor: colors.charcoal,
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  title: {
    fontSize: 23,
    fontWeight: '400',
    color: colors.charcoal,
    fontFamily: 'Familjen Grotesk',
    marginBottom: 16,
    marginTop: 16,
  },
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
  submitButton: {
    width: width * 0.6,
    backgroundColor: colors.skyBlue,
    paddingHorizontal: 17,
    paddingVertical: 7,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: colors.buttonText,
    fontSize: width > 350 ? 23 : 18,
    fontWeight: '500',
    fontFamily: 'Montserrat',
  },
  alignButton: {
    alignItems: 'center',
  },
});
