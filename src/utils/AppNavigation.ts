import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../types/types';

export const useAppNavigation = () => {
  return useNavigation<NativeStackNavigationProp<RootStackParams>>();
};
