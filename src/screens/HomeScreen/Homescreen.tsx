import React, {useRef, useState} from 'react';

import {FlatList, ViewToken, ViewabilityConfig} from 'react-native';
import posts from '../../assets/data/posts.json';
import FeedPost from '../../components/FeedPost';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id || 0);
      }
    },
  );
  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  return (
    <FlatList
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
      showsVerticalScrollIndicator={false}
      data={posts}
      renderItem={({item}) => (
        <FeedPost post={item} isVisible={activePostId === item.id} />
      )}
    />
  );
};

export default HomeScreen;
