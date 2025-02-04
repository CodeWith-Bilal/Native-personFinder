import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {useAppNavigation} from '../../hooks/useAppNavigation';
import {IMAGES} from '../../constants/constants';
import { useProfile } from '../../hooks/useProfile';
import { colors } from '../../constants/colors';
const EditProfileScreen: React.FC = () => {
  const navigation = useAppNavigation();
  const {name, email, photo, setName, selectImage, handleSave, signOut} =
    useProfile();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={IMAGES.back} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit Profile</Text>
        <TouchableOpacity onPress={signOut}>
          <Image source={IMAGES.logout} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={photo ? {uri: photo} : IMAGES?.user}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon} onPress={selectImage}>
            <Image source={IMAGES.edit} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Name"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper}>
            <Image source={IMAGES.icon} />
            <TextInput
              style={styles.inputWithIcon}
              value={email}
              editable={false}
              placeholder="Email"
            />
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.savebtnText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  inputWithIcon: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.bigBlack,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 69,
  },
  profileImage: {
    width: 125,
    height: 125,
    borderRadius: 62,
    marginBottom: 10,
  },
  editIcon: {
    position: 'relative',

    top: -40,
    left: 40,
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.label,
    marginBottom: 6,
  },
  input: {
    height: 50,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: colors.blue,
    paddingVertical: 15,
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  savebtnText: {
    color: colors.btnText,
    fontWeight: 'bold',
    fontSize: 23,
  },
});
