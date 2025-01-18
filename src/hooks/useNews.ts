import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Report} from '../types/types';

const useFetchReports = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('News')
      .orderBy('timestamp', 'desc')
      .onSnapshot(
        querySnapshot => {
          const reportList = querySnapshot.docs.map(documentSnapshot => {
            const data = documentSnapshot.data();
            return {
              id: documentSnapshot?.id,
              name: data?.fullName,
              reporter: data?.reportedBy,
              location: data?.currentLocation,
              description: data?.description,
              photoUrl: data?.photo,
            };
          });
          setReports(reportList);
          setIsLoading(false);
        },
        () => {
          setIsLoading(false);
        },
      );

    return () => unsubscribe();
  }, []);

  return {reports, isLoading};
};

export default useFetchReports;
