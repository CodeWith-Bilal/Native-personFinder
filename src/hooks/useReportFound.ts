import {useState} from 'react';
import {useAppDispatch} from './useDispatch';
import {addNewsReport} from '../redux/slice/newsSlice';
import auth from '@react-native-firebase/auth';
import {useAppNavigation} from './useAppNavigation';
import {ToastAndroid} from 'react-native';
import {MissingPerson} from '../types/types';

export const useReportFound = (
  onClose: () => void,
  profile: MissingPerson | null,
) => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useAppDispatch();
  const currentUser = auth().currentUser;
  const navigation = useAppNavigation();
  const resetFields = () => {
    setCurrentLocation('');
    setDescription('');
  };

  const handleReportFound = () => {
    if (profile && currentUser) {
      dispatch(
        addNewsReport({
          fullName: profile?.fullName,
          photo: profile?.photo,
          currentLocation,
          description,
          reportedBy: currentUser?.displayName || currentUser?.email,
        }),
      )
        .then(() => {
          onClose();
          resetFields();
          ToastAndroid.show(
            'News report added successfully!',
            ToastAndroid.LONG,
          );

          navigation.navigate('News');
        })
        .catch(() => {
          ToastAndroid.show('Error adding news report', ToastAndroid.LONG);
        });
    } else {
      ToastAndroid.show(
        'No profile selected or user not logged in',
        ToastAndroid.LONG,
      );
    }
  };

  return {
    currentLocation,
    setCurrentLocation,
    description,
    setDescription,
    handleReportFound,
  };
};
