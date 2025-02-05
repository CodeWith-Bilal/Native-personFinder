import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
} from 'react-native';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {Logo} from '../../component/logo/Logo';
import {IMAGES} from '../../constants/constants';
import {colors} from '../../constants/colors';
import {useAutoScroll} from '../../hooks/useScroll';
import { styles } from './heroStyle';

interface HeroSectionProps {
  searchQuery: string;
  handleSearchQueryChange: (text: string) => void;
}

const imageList = [IMAGES.banner, IMAGES.bannerKid, IMAGES.missingBanner];
export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  handleSearchQueryChange,
}) => {
  const navigation = useAppNavigation();
  const {flatListRef} = useAutoScroll(imageList);

  const renderItem = ({item}: {item: any}) => (
    <View style={styles.imageContainer}>
      <Image source={item} style={styles.sliderImage} />
    </View>
  );

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

