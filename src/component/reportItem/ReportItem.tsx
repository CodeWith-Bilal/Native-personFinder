import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {sendEmail} from '../../utils/SendEmail';
import {ReportItemProps} from '../../types/types';
import { colors } from '../../constants/colors';

const ReportItem = ({item}: ReportItemProps) => (
  <View style={styles.reportCard}>
    <Image source={{uri: item?.photoUrl}} style={styles.reportImage} />
    <View style={styles.reportDetails}>
      <Text style={styles.reportName}>Name: {item?.name}</Text>
      <Text style={styles.reportReporter}>Reported by: {item?.reporter}</Text>
      <Text style={styles.reportLocation}>Location: {item?.location}</Text>
      {item?.description && (
        <Text style={styles.reportDescription}>
          Description: {item?.description}
        </Text>
      )}
      <TouchableOpacity
        style={styles.contactButton}
        onPress={() =>
          sendEmail(
            'Contact Regarding Missing Person',
            `Details about ${item?.name}`,
          )
        }>
        <Text style={styles.contactbtnText}>Contact Person</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default ReportItem;

export const styles = StyleSheet.create({
  reportCard: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: colors.white,
    padding: 16,
  },
  reportImage: {
    width: 115,
    height: 154,
    borderRadius: 10,
    marginRight: 16,
  },
  reportDetails: {
    flex: 1,
  },
  reportName: {
    fontFamily:'Familjen Grotesk',
    fontSize: 16,
    fontWeight: '400',
    color: colors.black,
  },
  reportReporter: {
    fontFamily:'Familjen Grotesk',
    fontSize: 16,
    marginTop: 4,
    fontWeight: '400',
    color: colors.black,
  },
  reportLocation: {
    fontFamily:'Familjen Grotesk',
    fontSize: 16,
    marginTop: 4,
    fontWeight: '400',
    color: colors.black,
  },
  reportDescription: {
    fontFamily:'Familjen Grotesk',
    fontSize: 16,
    marginTop: 4,
    fontWeight: '400',
    color: colors.black,
  },
  contactButton: {
    width: 101,
    marginTop: 17,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.blue,
    borderRadius: 5,
  },
  contactbtnText: {
    color: colors.white,
    fontSize: 11,
    textAlign: 'center',
  },
});
