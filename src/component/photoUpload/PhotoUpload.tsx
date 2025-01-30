import React from 'react';
import {View, Text, TouchableOpacity, Image,ActivityIndicator, StyleSheet} from 'react-native';
import {IMAGES} from '../../constants/constants';
import {PhotoUploadProp} from '../../types/types';
import { colors } from '../../constants/colors';
const PhotoUpload: React.FC<PhotoUploadProp> = ({
  photo,
  selectPhoto,
  isloading,
}) => {
  return (
    <>
      <Text style={styles.title}>Upload Photographs</Text>
      <TouchableOpacity style={styles.photoUpload} onPress={selectPhoto}>
        {isloading ? (
          <ActivityIndicator size="large" color={colors.blue} />
        ) : photo ? (
          <Image source={{uri: photo}} style={styles.uploadedImage} />
        ) : (
          <View style={styles.uploadContent}>
            <Image source={IMAGES?.uploadIcon} style={styles.uploadIcon} />
            <Text style={styles.uploadText}>
              Drag & drop files or <Text style={styles.browseText}>Browse</Text>
            </Text>
            <Text style={styles.format}>Supported formats: JPEG, PNG, JPG</Text>
          </View>
        )}
      </TouchableOpacity>
    </>
  );
};

export default PhotoUpload;

export const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    fontWeight: '400',
    color: colors.black,
    fontFamily: 'Familjen Grotesk',
    marginBottom: 16,
    marginTop: 16,
  },
  photoUpload: {
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    height: 173,
    backgroundColor: colors.white,
    borderStyle: 'dashed',
  },
  uploadContent: {
    alignItems: 'center',
  },
  uploadIcon: {
    marginBottom: 10,
  },
  uploadText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  browseText: {
    color: colors.blue,
    fontSize: 16,
    fontWeight: '400',
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },

  format: {
    color: colors.black,
    fontSize: 11,
    fontWeight: '400',
  },
});
