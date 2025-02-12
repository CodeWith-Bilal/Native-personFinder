import {
  ReportForm,
  FilterReport,
  ProfileScreen,
  News,
} from '../constants/constants';
import HomeScreen from '../screen/home/Home';

export const screenConfigurations = [
  {name: 'Home', component: HomeScreen},
  {name: 'Report', component: FilterReport},
  {name: 'Upload', component: ReportForm},
  {name: 'Profile', component: ProfileScreen},
  {name: 'News', component: News},
];
