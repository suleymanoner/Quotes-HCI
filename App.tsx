import React, {useEffect} from 'react';
import {LoginScreen} from './src/screens/LoginScreen';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTabScreen from './src/screens/MainTabs';
import {RootSiblingParent} from 'react-native-root-siblings';

export type RootStackParams = {
  LoginStack: any;
  BottomTabStack: any;
};

const LoginStack = createNativeStackNavigator();

const LoginStackScreens = () => (
  <LoginStack.Navigator screenOptions={{headerShown: false}}>
    <LoginStack.Screen name="LoginPage" component={LoginScreen} />
  </LoginStack.Navigator>
);

const RootStack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <RootSiblingParent>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="LoginStack"
          screenOptions={{headerShown: false}}>
          <RootStack.Screen name="LoginStack" component={LoginStackScreens} />
          <RootStack.Screen name="BottomTabStack" component={MainTabScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
};

export default App;
