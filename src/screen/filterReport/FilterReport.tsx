import React from 'react';
import {View, Text, FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import {useCombinedHook} from '../../hooks/useReportManager';
import MissingPersonModal from '../../component/profileModal/ProfileModal';
import Header from '../../component/header/Header';
import SearchBar from '../../component/searchBar/SearchBar';
import FilterOptions from '../../component/filterOptions/FilterOptions';
import {useAppNavigation} from '../../utils/AppNavigation';
import ProfileCard from '../../component/profileCard/ProfileCard';
import {colors} from '../../constants/colors';
import {ProfileCardProps} from "../../types/types"
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
  } = useCombinedHook();
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
          color={colors.skyBlue}
          style={styles.loader}
        />
      ) : filteredProfiles.length === 0 ? (
        <Text style={styles.noDataText}>No data found</Text>
      ) : (
        <FlatList
          data={filteredProfiles}
          renderItem={({item}) => (
            <ProfileCard
            profile={item as ProfileCardProps['profile']}
            onPress={() => openModal(item)}
          />
          )}
          keyExtractor={item => item?.id}
          contentContainerStyle={styles.listContent}
        />
      )}

      <MissingPersonModal
        visible={modalVisible}
        onClose={closeModal}
        profile={selectedProfile}
      />
    </View>
  );
};

export default AllMissingPersonsScreen;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whitish,
    padding: 16,
  },
  errorText: {
    color: colors.crimson,
    textAlign: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: colors.crimson,
  },
  listContent: {
    paddingBottom: 20,
  },
});