import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {IMAGES} from '../../constants/constants';
import {PhotoUploadProp} from '../../types/types';
import {COLORS} from '../../constants/colors';
import {styles} from './PhotoUploadStyle';
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
          <ActivityIndicator size="large" color={COLORS.blue} />
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
