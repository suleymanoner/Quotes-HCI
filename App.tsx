import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen'

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;
