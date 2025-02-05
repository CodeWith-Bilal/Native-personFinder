import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

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
      flexDirection: 'row',
      backgroundColor: colors.white,
    },
    profileCard: {
      backgroundColor: colors.white,
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
    detailsOverly:{
      backgroundColor: colors.overlay,
      borderRadius: 10,
    },
    missingText: {
      backgroundColor: colors.crimson,
      color: colors.white,
      fontSize: 32,
      fontWeight: '400',
      padding: 5,
      textAlign: 'center',
      borderRadius: 5,
    },
    profileDetails: {
      fontWeight: '400',
      backgroundColor: colors.overlay,
      width:200,
      fontSize: 11,
      color: 'white',
      position: 'absolute',
      bottom: 34,
      padding: 16,
    },
    detailsButton: {
      backgroundColor: colors.blue,
      margin: 16,
      borderRadius: 8,
      alignItems: 'center',
      width: 78,
      height: 24,
      padding: 5,
    },
    detailsbtnText: {
      color: colors.white,
      fontSize: 11,
    },
  });
