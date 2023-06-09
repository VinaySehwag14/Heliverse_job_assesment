import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';

const Screen3 = ({ navigation }) => {
  const [count, setCount] = useState(15000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 40000) {
          clearInterval(interval);
          return prevCount;
        } else {
          return prevCount + 1000;
        }
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const handleArrowPress = () => {
    navigation.navigate('Screen1');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/award_bg.png')}
        style={styles.imageBackground}
      >
        <View style={styles.contentContainer}>
          <Image
            source={require('../assets/girlClap.png')}
            style={styles.girlClapImage}
            resizeMode="contain"
          />
          <Text style={styles.countText}>{count}</Text>
          <Image
            source={require('../assets/main-heart.png')}
            style={styles.heartImage}
            resizeMode="contain"
          />
          <Text style={styles.friendText}>4 Friends Gave U Some Love</Text>
          <Image
            source={require('../assets/awardPlatform.png')}
            style={styles.awardPlatformImage}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity style={styles.arrowButton} onPress={handleArrowPress}>
          <Image
            source={require('../assets/arrow.png')}
            style={styles.arrowImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  girlClapImage: {
    width: 400,
    height: 300,
    zIndex: 80,
    position: 'absolute',
    bottom: 50,
  },
  countText: {
    fontSize: 40,
    color: 'yellow',
    position: 'absolute',
    top: 290,
    zIndex: 88,
  },
  heartImage: {
    width: 250,
    height: 160,
    position: 'absolute',
    top: 240,
    left: 70,
  },
  friendText: {
    fontSize: 26,
    color: 'yellow',
    position: 'absolute',
    top: 90,
    fontWeight: '500',
    textAlign: 'center',
    width: 200,
  },
  awardPlatformImage: {
    width: 400,
    height: 150,
    position: 'absolute',
    bottom: -30,
  },
  arrowButton: {
    position: 'absolute',
    bottom: 50,
    right: 50,
  },
  arrowImage: {
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 130,
    right: 1,
  },
});

export default Screen3;
