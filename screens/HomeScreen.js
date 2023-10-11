import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen({ navigation }) {
  const [homeIconColor, setHomeIconColor] = useState('blue');
  const [cameraIconColor, setCameraIconColor] = useState('grey');
  const [galleryIconColor, setGalleryIconColor] = useState('grey');
  const [flashlightOn, setFlashlightOn] = useState(false);

  const handleHomePress = () => {
    navigation.navigate('Home');
    setHomeIconColor('blue');
    setCameraIconColor('grey');
    setGalleryIconColor('grey');
  };

  const handleCameraPress = () => {
    navigation.navigate('Camera');
    setHomeIconColor('grey');
    setCameraIconColor('blue');
    setGalleryIconColor('grey');
  };

  const handleGalleryPress = () => {
    navigation.navigate('Gallery');
    setHomeIconColor('grey');
    setCameraIconColor('grey');
    setGalleryIconColor('blue');
  };

  const handleFlashlightToggle = () => {
    // Toggle the flashlight state
    setFlashlightOn(!flashlightOn);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={handleHomePress}>
        <Icon name="home" size={30} color={homeIconColor} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon} onPress={handleCameraPress}>
        <Icon name="camera" size={30} color={cameraIconColor} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon} onPress={handleGalleryPress}>
        <Icon name="picture-o" size={30} color={galleryIconColor} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.flashlight} onPress={handleFlashlightToggle}>
        <Icon name={flashlightOn ? 'flash' : 'flash-off'} size={30} color="grey" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  icon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flashlight: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default HomeScreen;
