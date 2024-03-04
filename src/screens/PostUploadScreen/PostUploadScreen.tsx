import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Camera,
  CameraPictureOptions,
  CameraRecordingOptions,
  CameraType,
  FlashMode,
} from 'expo-camera';
import color from '../../themes/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PostUploadScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>();
  const [cameratype, setCameratype] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isRecording, setIsrecording] = useState(false);
  const camera = useRef<Camera>(null);

  const flashModes = [
    FlashMode.off,
    FlashMode.on,
    FlashMode.auto,
    FlashMode.torch,
  ];

  const flashModeIcon = {
    [FlashMode.off]: 'flash-off',
    [FlashMode.on]: 'flash-on',
    [FlashMode.auto]: 'flash-auto',
    [FlashMode.torch]: 'highlight',
  };

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();
      setHasPermission(
        cameraPermission.status === 'granted' &&
          microphonePermission.status === 'granted',
      );
    };
    getPermission();
  }, []);

  if (hasPermission == null) {
    return <Text>Loading</Text>;
  }
  const toggleCamera = () =>
    setCameratype(currentCameraType =>
      currentCameraType === CameraType.back
        ? CameraType.front
        : CameraType.back,
    );
  const flipFlash = () => {
    const currentIndex = flashModes.indexOf(flash);
    const nextIndex =
      currentIndex === flashModes.length - 1 ? 0 : currentIndex + 1;
    setFlash(flashModes[nextIndex]);
  };

  const takePicture = async () => {
    if (!isCameraReady || !camera.current) {
      return;
    }
    const options: CameraPictureOptions = {
      skipProcessing: true,
      base64: false,
      quality: 0.5,
    };
    const result = await camera.current.takePictureAsync(options);
    console.log(result);
  };
  const startRecodring = async () => {
    console.warn('Start Recording');
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }
    const options: CameraRecordingOptions = {
      quality: Camera.Constants.VideoQuality['640:480'],
      maxDuration: 60,
      maxFileSize: 10 * 1024 * 1024,
      mute: false,
    };
    setIsrecording(true);
    try {
      const result = await camera.current.recordAsync(options);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
    setIsrecording(false);
  };
  const stopRecording = () => {
    if (isRecording) {
      camera.current?.stopRecording();
      setIsrecording(false);
    }
  };

  return (
    <View style={styles.page}>
      <Camera
        ref={camera}
        style={styles.camera}
        type={cameratype}
        ratio="4:3"
        flashMode={FlashMode.on}
        onCameraReady={() => setIsCameraReady(true)}
      />
      <View style={[styles.buttonContainer, {top: 25}]}>
        <MaterialIcons name="close" color={color.white} size={30} />
        <Pressable onPress={flipFlash}>
          <MaterialIcons
            name={flashModeIcon[flash]}
            color={color.white}
            size={30}
          />
        </Pressable>
        <MaterialIcons name="settings" color={color.white} size={30} />
      </View>
      <View style={[styles.buttonContainer, {bottom: 25}]}>
        <MaterialIcons name="photo-library" color={color.white} size={30} />
        {isCameraReady && (
          <Pressable
            onPress={takePicture}
            onLongPress={startRecodring}
            onPressOut={stopRecording}>
            <View
              style={[
                styles.circle,
                {backgroundColor: isRecording ? color.accent : color.white},
              ]}
            />
          </Pressable>
        )}
        <Pressable onPress={toggleCamera}>
          <MaterialIcons name="flip-camera-ios" color={color.white} size={30} />
        </Pressable>
      </View>
    </View>
  );
};

export default PostUploadScreen;

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'center', backgroundColor: color.black},
  camera: {width: '100%', aspectRatio: 4 / 5},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
  },
  circle: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 75,
    backgroundColor: color.white,
  },
});
