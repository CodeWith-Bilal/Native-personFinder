import {useEffect, useRef, useState} from 'react';
import {FlatList, ImageSourcePropType} from 'react-native';
import {UseAutoScrollReturn} from '../types/types';

export const useScroll = (
  imageList: ImageSourcePropType[],
): UseAutoScrollReturn => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % imageList.length;
        flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [imageList.length]);

  return {flatListRef, currentIndex, length: imageList.length, imageList};
};
