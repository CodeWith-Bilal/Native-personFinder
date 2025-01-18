import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import {styles} from './FilterOptionsStyles';
import { colors } from '../../constants/colors';
interface FilterOptionsProps {
  options: string[];
  onSelect: (option: string | null) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({options, onSelect}) => {
  return (
    <>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Filter By: </Text>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.filterButton}
            onPress={() => onSelect(option === 'All' ? null : option)}>
            <Text style={styles.filterButtonText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default FilterOptions;
export const styles = StyleSheet.create({
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: 16,
    },
    filterText: {fontSize: 14, fontWeight: 'bold', color: colors.charcoal},

    filterButton: {
      backgroundColor: colors.filter,
      paddingVertical: 8,
      paddingHorizontal: 12,
      shadowColor: colors.shadow,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.09,
      shadowRadius: 2,
      elevation: 2,
    },
    filterButtonText: {fontSize: 14, fontWeight: 'bold', color: colors.label},
  });
