import React from 'react';
<<<<<<< HEAD
import { View, TextInput, TouchableOpacity, Image, Text, StyleSheet, FlatList } from 'react-native';
import { useAppNavigation } from '../../utils/AppNavigation';
import { Logo } from '../../component/logo/Logo';
import { IMAGES } from '../../constants/constants';
import { colors } from '../../constants/colors';
import { useAutoScroll } from '../../hooks/useScroll';

=======
import {View, TextInput, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {useAppNavigation} from '../../utils/AppNavigation';
import {Logo} from '../../component/logo/Logo';
import {IMAGES} from '../../constants/constants';
import {colors} from '../../constants/colors';
>>>>>>> 0d02bea3c2765118d7deeb36477f63487a609931
interface HeroSectionProps {
  searchQuery: string;
  handleSearchQueryChange: (text: string) => void;
}

<<<<<<< HEAD
const imageList = [IMAGES.banner, IMAGES.bannerKid, IMAGES.missingBanner];

export const HeroSection: React.FC<HeroSectionProps> = ({ searchQuery, handleSearchQueryChange }) => {
  const navigation = useAppNavigation();
  const { flatListRef } = useAutoScroll(imageList);

  const renderItem = ({ item }: { item: any }) => <Image source={item} style={styles.sliderImage} />;
=======
export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  handleSearchQueryChange,
}) => {
  const navigation = useAppNavigation();
>>>>>>> 0d02bea3c2765118d7deeb36477f63487a609931

  return (
    <>
      <View style={styles.header}>
        <Logo color={colors.blue} size="45" />
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            placeholderTextColor={colors.bigBlack}
            value={searchQuery}
            onChangeText={handleSearchQueryChange}
          />
          <TouchableOpacity>
            <Image source={IMAGES?.search} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bannerContainer}>
<<<<<<< HEAD
        <FlatList
          ref={flatListRef}
          data={imageList}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEnabled={false}
        />
=======
        <Image source={IMAGES?.banner} style={styles.bannerImage} />
>>>>>>> 0d02bea3c2765118d7deeb36477f63487a609931
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Featured Profiles</Text>
        <TouchableOpacity>
<<<<<<< HEAD
          <Text style={styles.seeMore} onPress={() => navigation.navigate('FilterReport')}>
=======
          <Text
            style={styles.seeMore}
            onPress={() => navigation.navigate('FilterReport')}>
>>>>>>> 0d02bea3c2765118d7deeb36477f63487a609931
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
    backgroundColor: colors.white,
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
    fontSize: 14,
  },
  bannerContainer: {
    alignItems: 'center',
<<<<<<< HEAD
    width:'100%',
    marginVertical: 20,
  },
  sliderImage: {
    width: 344,
    height: 250,
    borderRadius: 10,
    marginHorizontal: 25,
=======
    marginVertical: 20,
  },
  bannerImage: {
    width: '90%',
    height: 200,
    borderRadius: 10,
>>>>>>> 0d02bea3c2765118d7deeb36477f63487a609931
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
