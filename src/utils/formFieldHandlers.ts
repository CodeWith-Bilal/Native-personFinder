import {Alert} from 'react-native';
import {ReportFormState, FormFieldKey} from '../types/types';
export const handleFormFieldUpdate = (
  state: ReportFormState,
  key: FormFieldKey,
  value: string,
) => {
  switch (key) {
    case 'fullName':
    case 'gender':
    case 'nickname':
    case 'height':
    case 'weight':
    case 'eyeColor':
    case 'hairColor':
    case 'hairLength':
    case 'lastSeen':
    case 'lastLocation':
      state[key] = value;
      break;
    case 'dateOfBirth':
      state.dateOfBirth = new Date(value).toISOString();
      break;
    case 'photo':
      state.photo = value || null;
      break;
    default:
      Alert.alert(`Unknown field ${key}`);
      break;
  }
};
