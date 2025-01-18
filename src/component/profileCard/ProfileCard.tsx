import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
// import {styles} from './ProfileCardStyles';
import {ProfileCardProps} from '../../types/types';
import { colors } from '../../constants/colors';

const ProfileCard: React.FC<ProfileCardProps> = ({profile, onPress}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: profile?.photo}} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>Name: {profile?.fullName}</Text>
        <Text style={styles.details}>
          Age: {profile?.age ?? 'Date of birth not available'} ({profile?.gender})
        </Text>
        <Text style={styles.details}>Last Seen: {profile?.lastSeen}</Text>
        <Text style={styles.details}>
          Last Seen Location: {profile?.lastLocation}
        </Text>
        <TouchableOpacity style={styles.detailsButton} onPress={onPress}>
          <Text style={styles.detailsButtonText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileCard;
export const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      padding: 16,
      backgroundColor: colors.whitish,
      borderRadius: 8,
      marginBottom: 16,
    },
    image: {
      width: 115,
      height: 154,
      borderRadius: 8,
      marginRight: 16,
    },
    info: {
      flex: 1,
    },
    name: {
      fontFamily:'Familjen Grotesk',
      fontSize: 16,
      fontWeight: '400',
      marginBottom: 4,
      color: colors.charcoal,
    },
    details: {
      fontFamily:'Familjen Grotesk',
      fontSize: 16,
      marginBottom: 2,
      fontWeight: '400',
      color: colors.charcoal,
    },
    detailsButton: {
      width: 93,
      marginTop: 8,
      backgroundColor: colors.skyBlue,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 8,
    },
    detailsButtonText: {
      color: colors.whitish,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
