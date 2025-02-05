import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useHomeScreenManager} from '../../hooks/useHome';
import {HeroSection} from '../../component/hero/Hero';
import {IMAGES} from '../../constants/constants';
import {colors} from '../../constants/colors';
import ReportModal from '../../component/reportModal/ReportModal';
import { styles } from './homeStyle';

export default function HomeScreen() {
  const {
    searchQuery,
    handleSearchQueryChange,
    filteredProfiles,
    modalVisible,
    selectedProfile,
    openModal,
    closeModal,
    loading,
  } = useHomeScreenManager();

  let error: undefined;

  return (
    <ScrollView style={{flex: 1, backgroundColor: colors.white,}}>
      {error && (
        <Text style={{color: colors.crimson, textAlign: 'center'}}>
          {error}
        </Text>
      )}
      <HeroSection
        searchQuery={searchQuery}
        handleSearchQueryChange={handleSearchQueryChange}
      />

      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={colors.blue} />
        </View>
      ) : filteredProfiles.length === 0 ? (
        <Text style={styles.noDataText}>No reports found.</Text>
      ) : (
        <ScrollView
          horizontal={true}
          style={styles.profilesContainer}
          showsHorizontalScrollIndicator={false}>
          {filteredProfiles.map(profile => (
            <View key={profile.id} style={styles.profileCard}>
              <ImageBackground
                source={{uri: profile?.photo || IMAGES.kid}}
                style={styles.profileImage}
                imageStyle={{borderRadius: 10}}>
                <View style={styles.overlay}>
                  <Text style={styles.missingText}>MISSING</Text>
                  <View style={styles.detailsOverly}>
                  <Text style={styles.profileDetails}>
                    Name: {profile?.fullName}
                    {'\n'}
                    Age: {profile?.age} ({profile?.gender}){'\n'}
                    Last Seen: {profile?.lastSeen}
                    {'\n'}
                    Last Seen Location: {profile?.lastLocation}
                  </Text>
                  <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={() => openModal(profile)}>
                    <Text style={styles.detailsbtnText}>View Details</Text>
                  </TouchableOpacity>
                  </View>
                </View>
              </ImageBackground>
            </View>
          ))}
        </ScrollView>
      )}

      <ReportModal
        visible={modalVisible}
        onClose={closeModal}
        profile={selectedProfile}
      />
    </ScrollView>
  );
}

