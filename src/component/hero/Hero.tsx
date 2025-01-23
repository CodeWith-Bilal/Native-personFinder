import React from 'react';
import {View, TextInput, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {useAppNavigation} from '../../utils/AppNavigation';
import {Logo} from '../../component/logo/Logo';
import {IMAGES} from '../../constants/constants';
import {colors} from '../../constants/colors';
interface HeroSectionProps {
  searchQuery: string;
  handleSearchQueryChange: (text: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  handleSearchQueryChange,
}) => {
  const navigation = useAppNavigation();

  return (
    <>
      <View style={styles.header}>
        <Logo color={colors.skyBlue} size="45" />
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={handleSearchQueryChange}
          />
          <TouchableOpacity>
            <Image source={IMAGES?.search} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bannerContainer}>
        <Image source={IMAGES?.banner} style={styles.bannerImage} />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Featured Profiles</Text>
        <TouchableOpacity>
          <Text
            style={styles.seeMore}
            onPress={() => navigation.navigate('FilterReport')}>
            See More
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.whitish,
    borderRadius: 8,
    marginTop: 10,
    paddingHorizontal: 16,
    width: '80%',
    borderColor: colors.bigBlack,
    borderWidth: 0.5,
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  bannerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  bannerImage: {
    width: '90%',
    height: 200,
    borderRadius: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 23,
    fontWeight: '400',
    color: colors.bigBlack,
    fontFamily: 'Familjen Grotesk',
  },
  seeMore: {
    fontFamily: 'Familjen Grotesk',
    fontSize: 16,
    color: colors.navyBlue,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
});