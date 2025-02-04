import React from 'react';
import {View, Text, ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import useFetchReports from '../../hooks/useNews';
import {colors} from '../../constants/colors';
import Header from '../../component/header/Header';
import ReportItem from '../../component/reportItem/ReportItem';
import {useAppNavigation} from '../../hooks/useAppNavigation';
const ReportScreen = () => {
  const navigation = useAppNavigation();
  const {reports, isLoading} = useFetchReports();

  return (
    <View style={styles.container}>
      <Header title="Reports" onBackPress={() => navigation.goBack()} />

      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={colors.blue}
          style={styles.loader}
        />
      ) : reports.length === 0 ? (
        <Text style={styles.noDataText}>No data found</Text>
      ) : (
        <FlatList
          data={reports}
          renderItem={({item}) => <ReportItem item={item} />}
          keyExtractor={item => item?.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

export default ReportScreen;
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      paddingHorizontal: 16,
      paddingTop: 20,
    },
    listContainer: {
      paddingBottom: 20,
    },
    noDataText: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
      color: colors.crimson,
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
