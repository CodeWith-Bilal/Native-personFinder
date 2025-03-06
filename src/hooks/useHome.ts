import {useState, useMemo} from 'react';
import {useReport} from './useReport';

export const useHome = () => {
  const {
    profiles,
    modalVisible,
    selectedProfile,
    openModal,
    closeModal,
    isloading,
  } = useReport();
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
    isloading,
  };
};
