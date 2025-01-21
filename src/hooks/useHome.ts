import { useState, useMemo } from 'react';
import { useReportManager } from '../hooks/useReportManager';

export const useHomeScreenManager = () => {
  const {
    profiles,
    modalVisible,
    selectedProfile,
    openModal,
    closeModal,
    loading,
  } = useReportManager();

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResultsCount, setFilteredResultsCount] = useState(0);

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  const filteredProfiles = useMemo(() => {
    const results = profiles.filter(profile => {
      const nameMatch = profile?.fullName
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
      const locationMatch = profile?.lastLocation
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
      return nameMatch || locationMatch;
    });

    setFilteredResultsCount(results.length); // Track the number of matches
    return results;
  }, [profiles, searchQuery]);

  return {
    searchQuery,
    handleSearchQueryChange,
    filteredProfiles,
    filteredResultsCount, // Added for showing result counts
    modalVisible,
    selectedProfile,
    openModal,
    closeModal,
    loading,
  };
};
