import { useState, useEffect } from 'react';
import { Alert, ToastAndroid } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
// import storage from '@react-native-firebase/storage';
import { useSelector } from 'react-redux';
import { useAppDispatch } from './useDispatch';
import { RootState } from '../redux/store';
import {
  updateFormField,
  resetForm,
} from '../redux/slice/reportFormSlice';
import {
  fetchReports,
  setSearchQuery,
  setSelectedGender,
  filterProfiles,
} from '../redux/slice/filterReportSlice';
import { useAppNavigation } from '../utils/AppNavigation';
import { CustomDateTimePickerEvent } from '../types/types';
import { Profile } from '../types/types';

export function useReportManager() {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dateOfBirth: new Date().toISOString(),
    nickname: '',
    height: '',
    weight: '',
    eyeColor: '',
    hairColor: '',
    hairLength: '',
    photo: null,
    lastSeen: '',
    lastLocation: '',
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    key: keyof typeof formData,
    value: string | Date | number | null,
  ) => {
    const updatedValue =
      key === 'dateOfBirth' && value instanceof Date
        ? value.toISOString()
        : value;

    setFormData((prev) => ({ ...prev, [key]: updatedValue }));
    dispatch(updateFormField({ key, value: updatedValue }));
  };

  const handleDateChange = (
    event: CustomDateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    const currentDate = selectedDate || new Date(formData?.dateOfBirth);
    const isoString = currentDate.toISOString(); // Ensure it's properly formatted
    handleInputChange('dateOfBirth', isoString);
    setShowDatePicker(false);
  };
  const selectPhoto = async () => {
    setIsLoading(true);
    const response = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
      includeBase64: true, // Include base64 in the response
    });

    if (response.assets && response.assets.length > 0) {
      const imageBase64 = response.assets[0].base64;
      if (imageBase64) {
        try {
          // Save base64 image in Firestore under the 'Reports' collection
          const reportId = 'uniqueReportId'; // Replace with actual report ID or logic
          await firestore()
            .collection('Reports')
            .doc(reportId) // Specify the report document
            .set(
              {
                photo: `data:image/jpeg;base64,${imageBase64}`, // Save base64 as a Data URI
              },
              { merge: true }, // Ensure it doesn't overwrite other fields
            );

          handleInputChange('photo', `data:image/jpeg;base64,${imageBase64}`);
          Alert.alert('Success', 'Image uploaded successfully!');
        } catch (error) {
          console.error('Error uploading image:', error);
          Alert.alert('Error', 'Failed to upload image to Firestore.');
        }
      } else {
        Alert.alert('Error', 'No valid image data found.');
      }
    } else {
      Alert.alert('Error', 'No image selected.');
    }
    setIsLoading(false);
  };

  const submitReportForm = async () => {
    const {
      fullName,
      gender,
      dateOfBirth,
      lastSeen,
      lastLocation,
      height,
      weight,
      eyeColor,
      hairColor,
      hairLength,
      nickname,
      photo,
    } = formData;

    if (
      !fullName ||
      !gender ||
      !dateOfBirth ||
      // !lastSeen ||
      !lastLocation ||
      !height ||
      !weight ||
      !eyeColor ||
      !hairColor ||
      !nickname ||
      !hairLength ||
      !photo
    ) {
      ToastAndroid.show('Please fill all required fields.', ToastAndroid.LONG);
      return;
    }

    try {
      const reportData = {
        fullName,
        gender,
        dateOfBirth,
        lastSeen,
        lastLocation,
        height,
        weight,
        eyeColor,
        hairColor,
        hairLength,
        nickname,
        photo, // The image URL from Firebase Storage or base64 image
        timestamp: firestore.FieldValue.serverTimestamp(), // Add timestamp for ordering
      };

      await firestore().collection('Reports').add(reportData);

      ToastAndroid.show(
        'Missing person report has been submitted.',
        ToastAndroid.LONG,
      );
      navigation.navigate('Home');
      dispatch(resetForm());
      setFormData({
        fullName: '',
        gender: '',
        dateOfBirth: new Date().toISOString(),
        nickname: '',
        lastLocation: '',
        lastSeen: '',
        height: '',
        weight: '',
        eyeColor: '',
        hairColor: '',
        hairLength: '',
        photo: null,
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to submit report. Please try again.');
    }
  };

  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [profilesError, setProfilesError] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = firestore()
      .collection('Reports')
      .orderBy('timestamp', 'desc')
      .onSnapshot(
        (querySnapshot) => {
          const profilesData: Profile[] = querySnapshot.docs.map(
            (doc) =>
              ({
                id: doc.id,
                ...doc.data(),
              } as Profile),
          );
          setProfiles(profilesData);
          setLoading(false);
        },
        () => {
          setProfilesError('Error fetching profiles');
          setLoading(false);
        },
      );

    return () => unsubscribe();
  }, []);

  const openModal = (profile: Profile) => {
    setSelectedProfile(profile);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProfile(null);
  };

  const { filteredProfiles, selectedGender, searchQuery } = useSelector(
    (state: RootState) => state.filterReport,
  );

  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);

  const handleSearchQueryChange = (query: string) => {
    dispatch(setSearchQuery(query));
    dispatch(filterProfiles());
  };

  const handleGenderChange = (gender: string | null) => {
    dispatch(setSelectedGender(gender));
    dispatch(filterProfiles());
  };

  return {
    formData,
    showDatePicker,
    setShowDatePicker,
    showPicker,
    setShowPicker,
    date,
    setDate,
    handleInputChange,
    handleDateChange,
    selectPhoto,
    submitReport: submitReportForm,
    profiles,
    profilesError,
    modalVisible,
    selectedProfile,
    openModal,
    closeModal,
    filteredProfiles,
    selectedGender,
    searchQuery,
    loading,
    handleSearchQueryChange,
    handleGenderChange,
    isLoading,
  };
}
























// import { useState, useEffect } from 'react';
// import { Alert, ToastAndroid } from 'react-native';
// import { launchImageLibrary } from 'react-native-image-picker';
// import firestore from '@react-native-firebase/firestore';
// // import storage from '@react-native-firebase/storage';
// import { useSelector } from 'react-redux';
// import { useAppDispatch } from './useDispatch';
// import { RootState } from '../redux/store';
// import {
//   updateFormField,
//   // submitReport,
//   resetForm,
// } from '../redux/slice/reportFormSlice';
// import {
//   fetchReports,
//   setSearchQuery,
//   setSelectedGender,
//   filterProfiles,
// } from '../redux/slice/filterReportSlice';
// import { useAppNavigation } from '../utils/AppNavigation';
// import { CustomDateTimePickerEvent } from '../types/types';
// import { Profile } from '../types/types';

// export function useReportManager() {
//   const dispatch = useAppDispatch();
//   const navigation = useAppNavigation();

//   const [formData, setFormData] = useState({
//     fullName: '',
//     gender: '',
//     dateOfBirth: new Date().toISOString(),
//     nickname: '',
//     height: '',
//     weight: '',
//     eyeColor: '',
//     hairColor: '',
//     hairLength: '',
//     photo: null,
//     lastSeen: '',
//     lastLocation: '',
//   });

//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [showPicker, setShowPicker] = useState(false);
//   const [date, setDate] = useState(new Date());
//   const [isLoading, setIsLoading] = useState(false);

//   const handleInputChange = (
//     key: keyof typeof formData,
//     value: string | Date | number | null,
//   ) => {
//     const updatedValue =
//       key === 'dateOfBirth' && value instanceof Date
//         ? value.toISOString()
//         : value;

//     setFormData((prev) => ({ ...prev, [key]: updatedValue }));
//     dispatch(updateFormField({ key, value: updatedValue }));
//   };

//   const handleDateChange = (
//     event: CustomDateTimePickerEvent,
//     selectedDate: Date | undefined,
//   ) => {
//     const currentDate = selectedDate || new Date(formData?.dateOfBirth);
//     const isoString = currentDate.toISOString();
//     handleInputChange('dateOfBirth', isoString);
//     setShowDatePicker(false);
//   };

//   const selectPhoto = async () => {
//     setIsLoading(true);
//     const response = await launchImageLibrary({
//       mediaType: 'photo',
//       quality: 1,
//       includeBase64: true, // Include base64 in the response
//     });
//     if (response.assets && response.assets.length > 0) {
//       const imageBase64 = response.assets[0].base64;
//       if (imageBase64) {
//         try {
//           // Save base64 image in Firestore under the 'Reports' collection
//           const reportId = 'uniqueReportId'; // Replace with actual report ID or logic
//           await firestore()
//             .collection('Reports')
//             .doc(reportId) // Specify the report document
//             .set(
//               {
//                 photo: `data:image/jpeg;base64,${imageBase64}`, // Save base64 as a Data URI
//               },
//               {merge: true}, // Ensure it doesn't overwrite other fields
//             );
//           handleInputChange('photo', `data:image/jpeg;base64,${imageBase64}`);
//           Alert.alert('Success', 'Image uploaded successfully!');
//         } catch (error) {
//           console.error('Error uploading image:', error);
//           Alert.alert('Error', 'Failed to upload image to Firestore.');
//         }
//       } else {
//         Alert.alert('Error', 'No valid image data found.');
//       }
//     } else {
//       Alert.alert('Error', 'No image selected.');
//     }
//     setIsLoading(false);
//   };

//   const submitReportForm = async () => {
//     const {
//       fullName,
//       gender,
//       dateOfBirth,
//       lastSeen,
//       lastLocation,
//       height,
//       weight,
//       eyeColor,
//       hairColor,
//       hairLength,
//       nickname,
//       photo,
//     } = formData;

//     if (
//       !fullName ||
//       !gender ||
//       !dateOfBirth ||
//       !lastSeen ||
//       !lastLocation ||
//       !height ||
//       !weight ||
//       !eyeColor ||
//       !hairColor ||
//       !nickname ||
//       !hairLength ||
//       !photo
//     ) {
//       ToastAndroid.show('Please fill all required fields.', ToastAndroid.LONG);
//       return;
//     }

//     try {
//       const reportData = {
//         fullName,
//         gender,
//         dateOfBirth,
//         lastSeen,
//         lastLocation,
//         height,
//         weight,
//         eyeColor,
//         hairColor,
//         hairLength,
//         nickname,
//         photo, // The image URL from Firebase Storage
//         timestamp: firestore.FieldValue.serverTimestamp(), // Add timestamp for ordering
//       };

//       await firestore().collection('Reports').add(reportData);

//       ToastAndroid.show(
//         'Missing person report has been submitted.',
//         ToastAndroid.LONG,
//       );
//       navigation.navigate('Home');
//       dispatch(resetForm());
//       setFormData({
//         fullName: '',
//         gender: '',
//         dateOfBirth: new Date().toISOString(),
//         nickname: '',
//         lastLocation: '',
//         lastSeen: '',
//         height: '',
//         weight: '',
//         eyeColor: '',
//         hairColor: '',
//         hairLength: '',
//         photo: null,
//       });
//     } catch (error) {
//       Alert.alert('Error', 'Failed to submit report. Please try again.');
//     }
//   };

//   const [loading, setLoading] = useState(true);
//   const [profiles, setProfiles] = useState<Profile[]>([]);
//   const [profilesError, setProfilesError] = useState<string | null>(null);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

//   useEffect(() => {
//     setLoading(true);
//     const unsubscribe = firestore()
//       .collection('Reports')
//       .orderBy('timestamp', 'desc')
//       .onSnapshot(
//         (querySnapshot) => {
//           const profilesData: Profile[] = querySnapshot.docs.map(
//             (doc) =>
//               ({
//                 id: doc.id,
//                 ...doc.data(),
//               } as Profile),
//           );
//           setProfiles(profilesData);
//           setLoading(false);
//         },
//         () => {
//           setProfilesError('Error fetching profiles');
//           setLoading(false);
//         },
//       );

//     return () => unsubscribe();
//   }, []);

//   const openModal = (profile: Profile) => {
//     setSelectedProfile(profile);
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//     setSelectedProfile(null);
//   };

//   const { filteredProfiles, selectedGender, searchQuery } = useSelector(
//     (state: RootState) => state.filterReport,
//   );

//   useEffect(() => {
//     dispatch(fetchReports());
//   }, [dispatch]);

//   const handleSearchQueryChange = (query: string) => {
//     dispatch(setSearchQuery(query));
//     dispatch(filterProfiles());
//   };

//   const handleGenderChange = (gender: string | null) => {
//     dispatch(setSelectedGender(gender));
//     dispatch(filterProfiles());
//   };

//   return {
//     formData,
//     showDatePicker,
//     setShowDatePicker,
//     showPicker,
//     setShowPicker,
//     date,
//     setDate,
//     handleInputChange,
//     handleDateChange,
//     selectPhoto,
//     submitReport: submitReportForm,
//     profiles,
//     profilesError,
//     modalVisible,
//     selectedProfile,
//     openModal,
//     closeModal,
//     filteredProfiles,
//     selectedGender,
//     searchQuery,
//     loading,
//     handleSearchQueryChange,
//     handleGenderChange,
//     isLoading,
//   };
// }
