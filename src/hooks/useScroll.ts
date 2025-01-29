import { useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';

export const useAutoScroll = (imageList: any[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % imageList.length;
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [imageList.length]);

  return { flatListRef, currentIndex };
};
