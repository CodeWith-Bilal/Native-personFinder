import React from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';
import {IMAGES} from '../../constants/constants';
import {colors} from '../../constants/colors';
import {SearchBarProps} from '../../types/types';

const SearchBar: React.FC<SearchBarProps> = ({value, onChange}) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="black"
        value={value}
        onChangeText={onChange}
      />
      <Image source={IMAGES?.search} />
    </View>
  );
};

export default SearchBar;

export const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
    paddingVertical: 5,
    color: colors.bigBlack,
  },
});
