import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useReportFound} from '../../hooks/useReportFound';
import {sendEmail} from '../../utils/SendEmail';
import { ReportModalProps} from '../../types/types';
import {colors} from '../../constants/colors';

const ReportModal: React.FC<ReportModalProps> = ({
  visible,
  onClose,
  profile,
}) => {
  const {
    currentLocation,
    setCurrentLocation,
    description,
    setDescription,
    handleReportFound,
  } = useReportFound(onClose, profile);

  if (!profile) return null;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <KeyboardAvoidingView
        style={styles.modalContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closebtnText}>×</Text>
          </TouchableOpacity>
          <Image source={{uri: profile?.photo}} style={styles.modalImage} />
          <Text style={styles.modalDetails}>{profile?.fullName}</Text>
          <Text style={styles.modalDetails}>
            {profile?.age} Years Old {profile?.gender}
          </Text>
          <Text style={styles.modalDetails}>
            Last Seen Time: {profile?.lastSeen}
          </Text>
          <Text style={styles.modalDetails}>
            Last Seen Location: {profile?.lastLocation}
          </Text>

          <ScrollView style={{width: '100%'}}>
            <TextInput
              style={styles.modalInput}
              placeholder="Location"
              placeholderTextColor={colors.bigBlack}
              value={currentLocation}
              onChangeText={setCurrentLocation}
            />
            <TextInput
              style={[styles.modalInput, {height: 100}]}
              placeholder="More Description"
              placeholderTextColor={colors.bigBlack}
              multiline={true}
              value={description}
              onChangeText={setDescription}
            />
            <View style={styles.buttonAlign}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() =>
                  sendEmail(
                    'Contact Regarding Missing Person',
                    `Details about ${profile?.fullName}`,
                  )
                }>
                <Text style={styles.modalbtnText}>Contact Via Email</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, {backgroundColor: colors.blue}]}
                onPress={handleReportFound}>
                <Text style={styles.modalButtonReport}>Report Found</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ReportModal;

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.transparent,
  },
  modalContent: {
    width: '90%',
    height: '73%',
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  closebtnText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  modalImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },

  modalDetails: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 4,
    textAlign: 'center',
    color: colors.black,
    fontFamily: 'Familjen Grotesk',
  },
  modalInput: {
    width: '100%',
    height: 40,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 8,
    marginTop: 16,
  },
  modalButton: {
    backgroundColor: colors.white,

    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.blue,
  },

  modalbtnText: {
    color: colors.blue,
    fontWeight: '500',
    fontFamily: 'Montserrat',
  },
  modalButtonReport: {
    color: colors.white,
    fontWeight: '500',
    fontFamily: 'Montserrat',
  },
  buttonAlign: {
    marginTop: '20%',
  },
});

