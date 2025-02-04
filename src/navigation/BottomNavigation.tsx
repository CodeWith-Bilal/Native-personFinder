import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/home/Home';
import { colors } from '../constants/colors';
import {
  ReportForm,
  FilterReport,
  ProfileScreen,
  News,
} from '../constants/constants';
import {
  Image,
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  ImageSourcePropType,
} from 'react-native';
import { IMAGES } from '../constants/constants';

const Tab = createBottomTabNavigator();

type TabIcons = {
  [key: string]: ImageSourcePropType | undefined;
};

const getTabIcon = (routeName: string): ImageSourcePropType | undefined => {
  const icons: TabIcons = {
    Home: IMAGES?.home,
    Report: IMAGES?.report,
    Upload: IMAGES?.upload,
    Profile: IMAGES?.profile,
    News: IMAGES?.news,
  };

  return icons[routeName];
};

const screenConfigurations = [
  { name: 'Home', component: HomeScreen },
  { name: 'Report', component: FilterReport },
  { name: 'Upload', component: ReportForm },
  { name: 'Profile', component: ProfileScreen },
  { name: 'News', component: News },
];

const BottomNavigation: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            const iconSource = getTabIcon(route.name);
            return iconSource ? (
              <Image source={iconSource} style={styles.iconStyle} />
            ) : null;
          },
          tabBarLabel: ({ focused }: { focused: boolean }) => (
            <Text
              style={[
                styles.tabBarLabel,
                { color: focused ? colors.blue : colors.black, marginLeft: isLandscape ? 15 : 0 },
              ]}
            >
              {route.name}
            </Text>
          ),
          tabBarStyle: [
            styles.tabBarStyle,
            (route.name === 'Profile' || route.name === 'Upload') && { display: 'none' },
          ],
          headerShown: false,
        })}
      >
        {screenConfigurations.map((screen, index) => (
          <Tab.Screen
            key={index}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabBarStyle: {
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 26,
    paddingRight: 26,
    height: 62,
    margin: '10%',
    marginTop: 17,
    backgroundColor: 'white',
    borderRadius: 42,
    borderWidth: 2,
    borderTopWidth: 2,
    borderColor: colors.black,
  },
  tabBarLabel: {
    fontSize: 12,
    color: colors.black,
    fontWeight: '400',
  },
  iconStyle: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default BottomNavigation;