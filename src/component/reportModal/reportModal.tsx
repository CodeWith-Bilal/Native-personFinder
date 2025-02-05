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
  ScrollView
} from 'react-native';
import {useReportFound} from '../../hooks/useReportFound';
import {sendEmail} from '../../utils/SendEmail';
import { ReportModalProps} from '../../types/types';
import {colors} from '../../constants/colors';
import { styles } from './reportModalStyle';

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

  if (!profile) {return null;}

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



