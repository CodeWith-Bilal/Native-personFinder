import {useState} from 'react';

const useGenderDropdown = () => {
  const [genderDropdownVisible, setGenderDropdownVisible] = useState(false);

  const toggleGenderDropdown = () => {
    setGenderDropdownVisible(prev => !prev);
  };

  return {
    genderDropdownVisible,
    toggleGenderDropdown,
    setGenderDropdownVisible,
  };
};

export default useGenderDropdown;
