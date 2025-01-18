import {useState, useMemo} from 'react';
import {useCombinedHook} from '../hooks/useReportManager';

export const useHomeScreenManager = () => {
  const {
    profiles,
    modalVisible,
    selectedProfile,
    openModal,
    closeModal,
    loading,
  } = useCombinedHook();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  const filteredProfiles = useMemo(() => {
    return profiles.filter(
      profile =>
        profile?.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile?.lastLocation
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase()),
    );
  }, [profiles, searchQuery]);

  return {
    searchQuery,
    handleSearchQueryChange,
    filteredProfiles,
    modalVisible,
    selectedProfile,
    openModal,
    closeModal,
    loading,
  };
};
