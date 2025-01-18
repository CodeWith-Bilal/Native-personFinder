import {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';
import {updateProfileAsync} from '../redux/slice/profileSlice';
import {RootState} from '../redux/store';
import {useAppDispatch} from '../hooks/useDispatch';
import {
  launchImageLibrary,
  ImageLibraryOptions,
  Asset,
} from 'react-native-image-picker';
import {Alert} from 'react-native';
import {ToastAndroid} from 'react-native';
export const useProfile = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [photo, setPhoto] = useState<string | null>(null);

  const user: FirebaseAuthTypes.User | null = auth()?.currentUser;
  const dispatch = useAppDispatch();
  const {status, error} = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    if (user) {
      setName(user?.displayName || '');
      setEmail(user?.email || '');
      setPhoto(user?.photoURL);
    }
  }, [user]);

  const updateProfile = () => {
    if (user) {
      dispatch(updateProfileAsync({name, photo}));
    }
  };

  const selectImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response?.didCancel) {
        ToastAndroid.show('cancelled image picker', ToastAndroid.LONG);
      } else if (response?.errorCode) {
        ToastAndroid.show('ImagePicker Error ', ToastAndroid.LONG);
      } else if (response?.assets && response?.assets.length > 0) {
        const selectedAsset: Asset = response?.assets[0];
        setPhoto(selectedAsset.uri || null);
      }
    });
  };

  const handleSave = () => {
    updateProfile();
    if (status === 'succeeded') {
      ToastAndroid.show('Profile updated successfully. ', ToastAndroid.LONG);
    } else if (status === 'failed') {
      ToastAndroid.show('Failed to update profile. ', ToastAndroid.LONG);
    }
  };

  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        ToastAndroid.show(
          'You have been signed out successfully.',
          ToastAndroid.LONG,
        );
      })
      .catch(error => {
        Alert.alert('Error', error?.message);
      });
  };

  return {
    name,
    email,
    photo,
    setName,
    setPhoto,
    updateProfile,
    selectImage,
    handleSave,
    signOut,
    status,
    error,
  };
};
