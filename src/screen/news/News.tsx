import React from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import useFetchReports from '../../hooks/useNews';
import {colors} from '../../constants/colors';
import Header from '../../component/header/Header';
import ReportItem from '../../component/reportItem/ReportItem';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import { styles } from './newsStyle';
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
