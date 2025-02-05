import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../constants/colors';

import {
  Image,
  View,
  Text,
  useWindowDimensions,
  ImageSourcePropType,
} from 'react-native';
import { IMAGES } from '../constants/constants';
import { screenConfigurations } from '../utils/ScreenName';
import { styles } from './bottomNavigationStyle';

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
        {screenConfigurations?.map((screen, index) => (
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

export default BottomNavigation;
