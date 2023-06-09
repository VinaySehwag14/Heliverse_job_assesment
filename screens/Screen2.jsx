import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';

const Screen2 = ({ navigation }) => {
  const userProfileAnimation = new Animated.Value(0);
  const arrowAnimation = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(userProfileAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const timeout = setTimeout(() => {
      handleArrowPress();
    }, 20000);

    return () => clearTimeout(timeout);
  }, []);

  const handleArrowPress = () => {
    Animated.timing(arrowAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(userProfileAnimation, {
        toValue: -1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        navigation.navigate('Screen3');
      });
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/award_bg.png')}
        style={styles.imageBackground}
      >
        <View style={styles.contentContainer}>
          <View style={styles.overlayContainer}>
            <Image
              source={require('../assets/girlClap.png')}
              style={styles.girlClapImage}
              resizeMode="contain"
            />
            <View style={styles.UpperText}>
              <Text style={styles.htext}>Gave U Some Love</Text>
            </View>
            <Image
              source={require('../assets/main-heart.png')}
              style={styles.heartImage}
              resizeMode="contain"
            />
            <View style={styles.heartText}>
              <Text style={styles.htext}>15000</Text>
            </View>
            <Image
              source={require('../assets/awardPlatform.png')}
              style={styles.awardPlatformImage}
              resizeMode="contain"
            />
          </View>

          <Animated.View
            style={[
              styles.imageContainer,
              {
                transform: [
                  {
                    translateX: userProfileAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [300, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <View style={styles.avtarContainer}>
              <Image
                source={require('../assets/avtar2.png')}
                style={styles.avtar2Image}
                resizeMode="contain"
              />
              <View style={styles.spaceContainer} />
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>D-Lister</Text>
                <Text style={styles.subText}>Sally</Text>
              </View>
            </View>
          </Animated.View>

          <TouchableOpacity onPress={handleArrowPress}>
            <Image
              source={require('../assets/arrow.png')}
              style={styles.arrowImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
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
  imageContainer: {
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
  },
  overlayContainer: {
    position: 'absolute',
    bottom: 0,
  },
  girlClapImage: {
    width: 400,
    height: 300,
    zIndex: 80,
    bottom: 50,
  },
  UpperText: {
    position: 'absolute',
    top: -270,
    left: 60,
  },
  heartImage: {
    width: 250,
    height: 150,
    position: 'absolute',
    top: -210,
    left: 70,
  },
  heartText: {
    position: 'absolute',
    top: -160,
    left: 150,
    text: 'white',
  },
  htext: {
    color: 'yellow',
    fontSize: 34,
  },
  awardPlatformImage: {
    width: 400,
    height: 150,
    position: 'absolute',
    bottom: -30,
  },
  avtarContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 20,
    alignItems: 'center',
  },
  avtar2Image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'yellow',
    marginTop: 50,
  },
  spaceContainer: {
    width: 40,
  },
  nameContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 45,
    color: 'yellow',
  },
  subText: {
    fontSize: 16,
    color: 'white',
  },
  arrowButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  arrowImage: {
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 170,
    right: -150,
  },
});

export default Screen2;
