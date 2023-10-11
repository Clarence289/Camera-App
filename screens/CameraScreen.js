import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';

function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);

  // Request camera permissions
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedImage(photo.uri);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text></Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={cameraRef}
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
        captureAudio={false}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          <Button title="Take Picture" onPress={takePicture} />
        </View>
      </Camera>
      {capturedImage && (
        <View>
          <Image source={{ uri: capturedImage }} style={{ width: 200, height: 200 }} />
        </View>
      )}
    </View>
  );
}

export default CameraScreen;
