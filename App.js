import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';

const AppNavigator = createStackNavigator(
  {
    Screen1: {
      screen: Screen1,
      navigationOptions: {
        headerShown: false,
      },
    },
    Screen2: {
      screen: Screen2,
      navigationOptions: {
        headerShown: false,
      },
    },
    Screen3: {
      screen: Screen3,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Screen1',
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/award_bg.png')} // Replace with the path to your background image
        style={styles.imageBackground}
        resizeMode="cover" // Change the resizeMode to cover
      >
        <AppContainer />
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
  },
});

export default App;
