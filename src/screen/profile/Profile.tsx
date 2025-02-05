import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import {useAppNavigation} from '../../hooks/useAppNavigation';
import {IMAGES} from '../../constants/constants';
import { useProfile } from '../../hooks/useProfile';
import { styles } from './profileStyle';
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


