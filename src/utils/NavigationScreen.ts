import { RootStackParams } from '../types/types';
import BottomNavigation from '../navigation/BottomNavigation';

import {
  Register,
  Login,
  ForgotPassword,
  ReportForm,
  FilterReport,
  ProfileScreen,
  News,
} from '../constants/constants';



export const authenticatedScreens: Array<{ name: keyof RootStackParams; component: React.ComponentType<any> }> = [
    { name: 'MainTabs', component: BottomNavigation },
    { name: 'ReportForm', component: ReportForm },
    { name: 'FilterReport', component: FilterReport },
    { name: 'Profile', component: ProfileScreen },
    { name: 'News', component: News },
  ];
  
 export const unauthenticatedScreens: Array<{ name: keyof RootStackParams; component: React.ComponentType<any> }> = [
    { name: 'Login', component: Login },
    { name: 'Register', component: Register },
    { name: 'ForgotPassword', component: ForgotPassword },
  ];
  