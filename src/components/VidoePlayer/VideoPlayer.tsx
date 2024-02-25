import {Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../../themes/colors';

interface IVidoePlayer {
  uri: string;
  paused: boolean;
}

const VideoPlayer = ({uri, paused}: IVidoePlayer) => {
  const [isMute, setIsMute] = useState(true);

  const toggleVolume = () => {
    setIsMute(v => !v);
  };

  return (
    <View>
      <Video
        source={{uri: uri}}
        style={styles.video}
        muted={isMute}
        repeat={false}
        resizeMode="cover"
        paused={paused}
      />

      <Pressable style={styles.iconButton} onPress={toggleVolume}>
        <Ionicons name={isMute ? 'volume-mute' : 'volume-medium'} size={16} />
      </Pressable>
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  iconButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: color.lightgrey,
    borderRadius: 50,
    padding: 5,
  },
  video: {width: '100%', aspectRatio: 1},
});
