/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  View,
  ViewabilityConfig,
  useWindowDimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';
import color from '../../themes/colors';
import DoublePressable from '../DoublePressable';
import {ViewToken} from 'react-native';

interface ICorousel {
  images: string[];
  onDoublePressable?: () => void;
}

const Carousel = ({images, onDoublePressable = () => []}: ICorousel) => {
  const {width} = useWindowDimensions();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActiveImageIndex(viewableItems[0].index || 0);
      }
    },
  );
  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };
  return (
    <View
      style={{
        backgroundColor: 'blue',
        width: width,
      }}>
      <FlatList
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
        data={images}
        renderItem={({item}) => (
          <DoublePressable onDoublePress={onDoublePressable}>
            <Image
              source={{uri: item}}
              style={{width: width, aspectRatio: 1}}
            />
          </DoublePressable>
        )}
        horizontal
        pagingEnabled
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          justifyContent: 'center',
          width: '100%',
          flexDirection: 'row',
        }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              aspectRatio: 1,
              backgroundColor:
                activeImageIndex === index ? color.primary : color.white,
              borderRadius: 10,
              margin: 10,
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
