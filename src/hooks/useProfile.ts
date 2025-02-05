import { useState, useEffect } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useSelector } from 'react-redux';
import { updateProfileAsync } from '../redux/slice/profileSlice';
import { RootState } from '../redux/store';
import { useAppDispatch } from '../hooks/useRedux';
import { launchImageLibrary, ImageLibraryOptions, Asset } from 'react-native-image-picker';
import { ToastAndroid, Alert } from 'react-native';

export const useProfile = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [photo, setPhoto] = useState<string | null>(null);

  const user: FirebaseAuthTypes.User | null = auth()?.currentUser;
  const dispatch = useAppDispatch();
  const { status, error } = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    if (user) {
      setName(user.displayName || '');
      setEmail(user.email || '');
      setPhoto(user.photoURL || null);
    }
  }, [user]);

  const UpdateProfile = async () => {
  try {
    await dispatch(updateProfileAsync({ name, photo })).unwrap();
    ToastAndroid.show('Profile updated successfully.', ToastAndroid.LONG);
  } catch (err) {
    ToastAndroid.show('Failed to update profile.', ToastAndroid.LONG);
  }
};

  const selectImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        ToastAndroid.show('Cancelled image picker', ToastAndroid.LONG);
      } else if (response.errorCode) {
        ToastAndroid.show('Image Picker Error', ToastAndroid.LONG);
      } else if (response.assets && response.assets.length > 0) {
        const selectedAsset: Asset = response.assets[0];
        setPhoto(selectedAsset.uri || null);
      }
    });
  };

  const handleSave = () => {
    UpdateProfile();
  };

  const signOut = async () => {
    try {
      await auth().signOut();
      ToastAndroid.show('Signed out successfully.', ToastAndroid.LONG);
    } catch (err) {
      const erro = err as Error;
      Alert.alert('Error', erro.message);
    }
  };

  return {
    name,
    email,
    photo,
    setName,
    setPhoto,
    updateProfileAsync,
    selectImage,
    handleSave,
    signOut,
    status,
    error,
  };
};
