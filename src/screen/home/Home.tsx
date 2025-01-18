import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {useHomeScreenManager} from '../../hooks/useHome';
import MissingPersonModal from '../../component/profileModal/ProfileModal';
import {HeroSection} from '../../component/hero/Hero';
import {IMAGES} from '../../constants/constants';
import {colors} from '../../constants/colors';
// import {styles} from './HomeStyles';

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
    <ScrollView style={{flex: 1, backgroundColor: colors.whitish}}>
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
          <ActivityIndicator size="large" color={colors.skyBlue} />
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
                    <Text style={styles.detailsButtonText}>View Details</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          ))}
        </ScrollView>
      )}

      <MissingPersonModal
        visible={modalVisible}
        onClose={closeModal}
        profile={selectedProfile}
      />
    </ScrollView>
  );
}
export const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  noDataText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  profilesContainer: {
    margin: '5%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: colors.whitish,
  },
  profileCard: {
    backgroundColor: colors.whitish,
    width: 200,
    marginRight: 15,
    borderRadius: 10,
  },
  profileImage: {
    width: '100%',
    height: 304,
    borderRadius: 10,
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  missingText: {
    backgroundColor: colors.crimson,
    color: colors.whitish,
    fontSize: 32,
    fontWeight: '400',
    padding: 5,
    textAlign: 'center',
    borderRadius: 5,
  },
  profileDetails: {
    fontWeight: '400',
    fontSize: 11,
    color: 'white',
    position: 'absolute',
    bottom: 34,
    padding: 16,
  },
  detailsButton: {
    backgroundColor: colors.skyBlue,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: 78,
    height: 24,
    padding: 5,
  },
  detailsButtonText: {
    color: colors.whitish,
    fontSize: 11,
  },
});
