import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.white,
      borderRadius: 8,
      marginTop: 10,
      paddingHorizontal: 16,
      width: '80%',
      borderColor: colors.bigBlack,
      borderWidth: 0.5,
    },
    header: {
      alignItems: 'center',
      marginVertical: 20,
    },
    searchInput: {
      flex: 1,
      fontSize: 14,
    },
    bannerContainer: {
      alignItems: 'center',
      width: '100%',
      marginVertical: 20,
      paddingLeft: 10,
      paddingRight: 20,
      justifyContent: 'center',
    },
    sliderImage: {
      width: windowWidth * 0.9,
      height: 250,
      borderRadius: 10,
    },
    imageContainer: {
      paddingLeft: 10,
      paddingRight: 5,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 10,
    },
    sectionTitle: {
      fontSize: 23,
      fontWeight: '400',
      color: colors.bigBlack,
      fontFamily: 'Familjen Grotesk',
    },
    seeMore: {
      fontFamily: 'Familjen Grotesk',
      fontSize: 16,
      color: colors.navyBlue,
      fontWeight: '400',
      textDecorationLine: 'underline',
    },
  });
