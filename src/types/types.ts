export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  MainTabs: undefined;
  ReportForm: undefined;
  FilterReport: undefined;
  Profile: undefined;
};

export type FieldProps = {
  label: string;
  value: string;
  placeholder: string;
  onChange: (text: string) => void;
  type?: string;
};
export type BasicDetailsSectionProps = {
  formData: FormData;
  handleInputChange: (
    field:
      | 'fullName'
      | 'gender'
      | 'nickname'
      | 'height'
      | 'weight'
      | 'eyeColor'
      | 'hairColor'
      | 'hairLength'
      | 'lastSeen'
      | 'lastLocation'
      | 'dateOfBirth'
      | 'photo',
    value: string,
  ) => void;
  showDatePicker: boolean;
  setShowDatePicker: (value: boolean) => void;
  handleDateChange: (
    event: CustomDateTimePickerEvent,
    selectedDate?: Date,
  ) => void;
};
export type CustomDateTimePickerEvent = {
  type: string;
};
export type FormData = {
  fullName: string;
  gender: string;
  nickname: string;
  height: string;
  weight: string;
  eyeColor: string;
  hairColor: string;
  hairLength: string;
  lastSeen: string;
  lastLocation: string;
  dateOfBirth: string;
  photo: string | null;
};

export type fireError = {
  response?: {
    data: string;
  };
  message: string;
};

export type HandleInputChange = (field: keyof FormData, value: string) => void;
export type MissingPerson = {
  id: string;
  fullName: string;
  age: number;
  gender: string;
  lastSeen: string;
  lastLocation: string;
  photo: string;
};

export type RootStackParams = {
  Profile: undefined;
  MainTabs: undefined;
  ReportForm: undefined;
  FilterReport: undefined;
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  News: undefined;
  Home: undefined;
};

export type Profile = {
  id: string;
  fullName: string;
  gender: string;
  dateOfBirth: string;
  nickname: string;
  lastLocation: string;
  lastSeen: string;
  height: string;
  weight: string;
  eyeColor: string;
  hairColor: string;
  hairLength: string;
  photo: string;
  age: number;
};

export type AuthState = {
  loading: boolean;
  error: string | null;
  success: boolean;
  user: {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    phoneNumber?: string | null;
  } | null;
};

export type NewsState = {
  loading: boolean;
  error: string | null;
};
export type ProfileState = {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

export type ReportFormState = {
  fullName: string;
  gender: string;
  dateOfBirth: string;
  nickname: string;
  height: string;
  weight: string;
  eyeColor: string;
  hairColor: string;
  hairLength: string;
  photo: string | null;
  lastSeen: string;
  lastLocation: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};
export type FormFieldKey = keyof ReportFormState;
export type LastSeenSectionProps = {
  lastLocation: string;
  lastSeen: string;
  showPicker: boolean;
  date: Date;
  handleInputChange: (
    field:
      | 'fullName'
      | 'gender'
      | 'nickname'
      | 'height'
      | 'weight'
      | 'eyeColor'
      | 'hairColor'
      | 'hairLength'
      | 'lastSeen'
      | 'lastLocation'
      | 'dateOfBirth'
      | 'photo',
    value: string | Date,
  ) => void;

  setShowPicker: (value: boolean) => void;
  setDate: (date: Date) => void;
};

export type LogoProps = {
  color?: string;
  size?: string;
};
export type PhotoUploadSectionProp = {
  photo: string | null;
  selectPhoto: () => void;
  isloading: boolean;
};

export type ProfileCardProps = {
  profile: {
    id: string;
    fullName: string;
    age: number;
    gender: string;
    lastSeen: string;
    lastLocation: string;
    photo: string;
  };
  onPress: () => void;
};

export type MissingPersonModalProps = {
  visible: boolean;
  onClose: () => void;
  profile: MissingPerson | null;
};
export type Report = {
  id: string;
  name: string;
  reporter: string;
  location: string;
  description?: string;
  photoUrl: string;
};

export type ReportItemProps = {
  item: Report;
};
export type SearchBarProps = {
  value: string;
  onChange: (text: string) => void;
};
export type error = {
  error: undefined;
};
import {KeyboardTypeOptions} from 'react-native';
export type InputConfig = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry: boolean;
  helperText: string | null;
  keyboardType: KeyboardTypeOptions;
};
export type InputField = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType: KeyboardTypeOptions;
  secureTextEntry: boolean;
  icon?: any;
  infoText?: string;
};
