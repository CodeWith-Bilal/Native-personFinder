import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {MiissingPersonCardProp} from '../../types/types';
import {styles} from './MissingPersonCardStyle';

const MiissingPersonCard: React.FC<MiissingPersonCardProp> = ({
  profile,
  onPress,
}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: profile?.photo}} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>Name: {profile?.fullName}</Text>
        <Text style={styles.details}>
          Age: {profile?.age ?? 'Date of birth not available'} (
          {profile?.gender})
        </Text>
        <Text style={styles.details}>Last Seen: {profile?.lastSeen}</Text>
        <Text style={styles.details}>
          Last Seen Location: {profile?.lastLocation}
        </Text>
        <TouchableOpacity style={styles.detailsButton} onPress={onPress}>
          <Text style={styles.detailsbtnText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MiissingPersonCard;
