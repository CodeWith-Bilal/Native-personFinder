import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  ImageSourcePropType,
} from 'react-native';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {Logo} from '../../component/logo/Logo';
import {IMAGES} from '../../constants/constants';
import {COLORS} from '../../constants/colors';
import {useAutoScroll} from '../../hooks/useScroll';
import {styles} from './HeroStyle';

interface HeroSectionProps {
  searchQuery: string;
  handleSearchQueryChange: (text: string) => void;
}

const imageList: ImageSourcePropType[] = [
  IMAGES.banner,
  IMAGES.bannerKid,
  IMAGES.missingBanner,
];
export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  handleSearchQueryChange,
}) => {
  const navigation = useAppNavigation();
  const {flatListRef} = useAutoScroll(imageList);

  interface RenderItemProps {
    item: ImageSourcePropType;
  }

  const renderItem = ({item}: RenderItemProps) => (
    <View style={styles.imageContainer}>
      <Image source={item} style={styles.sliderImage} />
    </View>
  );

  return (
    <>
      <View style={styles.header}>
        <Logo color={COLORS.blue} size="45" />
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            placeholderTextColor={COLORS.bigBlack}
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
