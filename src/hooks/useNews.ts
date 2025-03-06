import { useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/useRedux';
import {fetchNewsWithSnapshot} from '../redux/slice/newsSlice';

const useNews = () => {
  const dispatch = useAppDispatch();
  const {reports, loading: isLoading} = useAppSelector(state => state.news);

  useEffect(() => {
    dispatch(fetchNewsWithSnapshot());

    return () => {
    };
  }, [dispatch]);

  return {reports, isLoading};
};

export default useNews;
