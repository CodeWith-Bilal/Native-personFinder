import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useAppDispatch} from '../hooks/useRedux';
import {
  updateFormField,
} from '../redux/slice/reportFormSlice';
import {
  fetchReportsWithSnapshotListener,
  uploadImageAndStore,
  submitReport as submitReportThunk, resetForm
} from '../redux/slice/reportFormSlice'; // Import the new thunks

export function useReport() {
  const dispatch = useAppDispatch();

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
  const [isloading, setIsloading] = useState(false);
  const [profiles, setProfiles] = useState<any[]>([]);
  const [profilesError, _setProfilesError] = useState<string | null>(null);
  const [searchQuery, _setSearchQuery] = useState<string>('');
  const [selectedGender, setSelectedGender] = useState<string | null>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedProfile, setSelectedProfile] = useState<any>(null);

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProfile(null);
  };

  const openModal = (profile: any) => {
    setSelectedProfile(profile);
    setModalVisible(true);
  };

  const handleInputChange = (
    key: keyof typeof formData,
    value: string | Date | number | null,
  ) => {
    const updatedValue =
      key === 'dateOfBirth' && value instanceof Date
        ? value.toISOString()
        : value;

    setFormData(prev => ({ ...prev, [key]: updatedValue }));
    dispatch(updateFormField({ key, value: updatedValue }));
  };

  const selectPhoto = async () => {
    setIsloading(true);
    const response = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    });

    if (response.assets && response.assets.length > 0) {
      const imageBase64 = response.assets[0].base64;
      if (imageBase64) {
        try {
          const reportId = 'uniqueReportId'; // Replace with actual report ID logic
          await dispatch(uploadImageAndStore({ imageBase64, reportId })).unwrap();
          handleInputChange('photo', `data:image/jpeg;base64,${imageBase64}`);
        } catch (error) {
          Alert.alert('Error', error as string);
        }
      } else {
        Alert.alert('Error', 'No valid image data found.');
      }
    } else {
      Alert.alert('Error', 'No image selected.');
    }
    setIsloading(false);
  };

  const handleGenderChange = (gender: string | null) => {
    setSelectedGender(gender);
    handleInputChange('gender', gender);
  };

  const handleLastSeenChange = (date: Date) => {
    handleInputChange('lastSeen', date.toISOString());
  };

  const handleSearchQueryChange = (query: string) => {
    // Implement your search query logic here
    // For example:
    dispatch(updateFormField({ key: 'searchQuery', value: query }));
  };

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;
    const fetchReports = async () => {
      const result = await dispatch(fetchReportsWithSnapshotListener()).unwrap();
      if ('reports' in result && 'unsubscribe' in result && typeof result.unsubscribe === 'function') {
        setProfiles(result.reports as any[]);
        unsubscribe = result.unsubscribe as () => void;
      }
    };

    fetchReports();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [dispatch]);

  const filteredProfiles = profiles.filter(profile => {
    const matchesSearch = profile.fullName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGender = !selectedGender || profile.gender === selectedGender;
    return matchesSearch && matchesGender;
  });

  const submitReport = async () => {
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
      !lastSeen ||
      !lastLocation ||
      !height ||
      !weight ||
      !eyeColor ||
      !hairColor ||
      !nickname ||
      !hairLength ||
      !photo
    ) {
      Alert.alert('Error', 'Please fill all required fields.');
      return;
    }

    try {
      await dispatch(submitReportThunk(formData)).unwrap();
      Alert.alert('Success', 'Missing person report has been submitted.');
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
      Alert.alert('Error', error as string);
    }
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
    handleLastSeenChange,
    selectPhoto,
    profiles,
    profilesError,
    modalVisible,
    selectedProfile,
    openModal,
    closeModal,
    filteredProfiles,
    selectedGender,
    searchQuery,
    handleSearchQueryChange,
    handleGenderChange,
    isloading,
    submitReport, // Add submitReport to the returned values
  };
}
