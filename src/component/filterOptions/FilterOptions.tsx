import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './FilterOptionsStyle';
interface FilterOptionsProps {
  options: string[];
  onSelect: (option: string | null) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({options, onSelect}) => {
  return (
    <>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Filter By: </Text>
        {options?.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.filterButton}
            onPress={() => onSelect(option === 'All' ? null : option)}>
            <Text style={styles.filterbtnText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default FilterOptions;
