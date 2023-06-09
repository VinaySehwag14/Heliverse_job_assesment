import React, { useEffect } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Screen1 = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Screen2');
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container]}>
      <ImageBackground
        source={require('../assets/award_bg.png')}
        style={styles.imageBackground}
      >
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/girlClap.png')}
              style={styles.girlClapImage}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/castingLogo.png')}
              style={[styles.castingLogo, { top: insets.top + 50, left: 20 }]}
              resizeMode="contain"
            />
            <View style={styles.textContainer}>
              <Text style={styles.resultsText}>The Results R In!</Text>
            </View>
            <Image
              source={require('../assets/awardPlatform.png')}
              style={styles.awardPlatformImage}
              resizeMode="contain"
            />
          </View>
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
  resultsText: {
    fontSize: 20,
    color: 'yellow',
    marginTop: 16,
  },
  imageContainer: {
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
  },
  girlClapImage: {
    position: 'absolute',
    bottom: 70,
    width: 400,
    height: 300,
    zIndex: 80,
  },
  castingLogo: {
    width: 140,
    height: 130,
    position: 'absolute',
    marginLeft: -90,
  },

  awardPlatformImage: {
    width: 400,
    height: 110,
    position: 'absolute',
    bottom: 0,
  },
  textContainer: {
    position: 'absolute',
    top: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Screen1;
