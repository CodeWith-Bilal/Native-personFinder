import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useReportHook} from '../../hooks/useReport';
import SearchBar from '../../component/searchBar/SearchBar';
import FilterOptions from '../../component/filterOptions/FilterOptions';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import MiissingPersonCard from '../../component/missingPersonCard/MissingPersonCard';
import {COLORS} from '../../constants/colors';
import {MiissingPersonCardProp} from '../../types/types';
import ReportModal from '../../component/reportModal/ReportModal';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {styles} from './FilterReportStyle';
const AllMissingPersonsScreen = () => {
  const navigation = useAppNavigation();
  const {
    modalVisible,
    selectedProfile,
    openModal,
    closeModal,
    filteredProfiles,
    searchQuery,
    handleSearchQueryChange,
    handleGenderChange,
    loading,
  } = useReportHook();
  let error: undefined;

  const filterOptions = ['Male', 'Female', 'Trans', 'All'];

  return (
    <View style={styles.container}>
      <Header
        title="All Missing Persons"
        onBackPress={() => navigation.goBack()}
      />
      <SearchBar value={searchQuery} onChange={handleSearchQueryChange} />
      <FilterOptions options={filterOptions} onSelect={handleGenderChange} />

      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : loading ? (
        <ActivityIndicator
          size="large"
          color={COLORS.blue}
          style={styles.loader}
        />
      ) : filteredProfiles.length === 0 ? (
        <Text style={styles.noDataText}>No data found</Text>
      ) : (
        <FlatList
          data={filteredProfiles}
          renderItem={({item}) => (
            <MiissingPersonCard
              profile={item as MiissingPersonCardProp['profile']}
              onPress={() => openModal(item)}
            />
          )}
          keyExtractor={item => item?.id}
          contentContainerStyle={styles.listContent}
        />
      )}

      <ReportModal
        visible={modalVisible}
        onClose={closeModal}
        profile={selectedProfile}
      />
    </View>
  );
};

export default AllMissingPersonsScreen;
