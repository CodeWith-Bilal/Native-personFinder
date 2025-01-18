import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, useWindowDimensions } from 'react-native';
import HomeScreen from '../screen/home/Home';
import { ReportForm, FilterReport, ProfileScreen, News } from '../constants/constants';
import { IMAGES } from '../constants/constants';
import { colors } from '../constants/colors';

// React Navigation Types
type RootTabParamList = {
  Home: undefined;
  Reports: undefined;
  Upload: undefined;
  Profile: undefined;
  News: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

// Props for TabBarIcon
interface TabBarIconProps {
  routeName: keyof RootTabParamList;
  focused: boolean;
}

// TabBarIcon Component
const TabBarIcon: React.FC<TabBarIconProps> = memo(({ routeName, focused }) => {
  let iconSource: any;
  switch (routeName) {
    case 'Home':
      iconSource = IMAGES?.home;
      break;
    case 'Reports':
      iconSource = IMAGES?.report;
      break;
    case 'Upload':
      iconSource = IMAGES?.upload;
      break;
    case 'Profile':
      iconSource = IMAGES?.profile;
      break;
    case 'News':
      iconSource = IMAGES?.news;
      break;
    default:
      iconSource = null;
  }

  return iconSource ? (
    <Image
      source={iconSource}
      style={{ tintColor: focused ? colors.skyBlue : colors.charcoal }}
    />
  ) : null;
});

// Props for TabBarLabel
interface TabBarLabelProps {
  label: string;
  focused: boolean;
  isLandscape: boolean;
}

// TabBarLabel Component
const TabBarLabel: React.FC<TabBarLabelProps> = memo(({ label, focused, isLandscape }) => (
  <Text
    style={[
      styles.tabBarLabel,
      { color: focused ? colors.skyBlue : colors.charcoal, marginLeft: isLandscape ? 15 : 0 },
    ]}
  >
    {label}
  </Text>
));

const BottomNavigation: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <TabBarIcon routeName={route.name as keyof RootTabParamList} focused={focused} />
        ),
        tabBarLabel: ({ focused }) => (
          <TabBarLabel
            label={route.name}
            focused={focused}
            isLandscape={isLandscape}
          />
        ),
        tabBarStyle: [
          styles.tabBarStyle,
          (route.name === 'Profile' || route.name === 'Upload') && {
            display: 'none',
          },
        ],
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Reports" component={FilterReport} />
      <Tab.Screen
        name="Upload"
        component={ReportForm}
        options={{
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tab.Screen name="News" component={News} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 26,
    paddingRight: 26,
    height: 62,
    margin: '10%',
    marginTop: 17,
    backgroundColor: colors.whitish,
    borderRadius: 42,
    borderWidth: 2,
    borderTopWidth: 2,
    borderColor: colors.charcoal,
  },
  tabBarLabel: {
    fontSize: 12,
    color: colors.charcoal,
    fontWeight: '400',
  },
});

export default BottomNavigation;
