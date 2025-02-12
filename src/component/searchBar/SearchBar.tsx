import React from 'react';
import {View, TextInput, Image} from 'react-native';
import {IMAGES} from '../../constants/constants';
import {SearchBarProps} from '../../types/types';
import {styles} from './SearchBarStyle';

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
