import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeScreen} from './HomeScreen';
import {DailyQuoteScreen} from './DailyQuoteScreen';
import {ProfileScreen} from './ProfileScreen';
import {CommentScreen} from './CommentScreen';
import {PostQuoteScreen} from './PostQuoteScreen';
import {SearchScreen} from './SearchScreen';
import {SettingScreen} from './SettingScreen';
import {EditProfileScreen} from './EditProfileScreen';

const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{headerShown: false}}>
    <HomeStack.Screen name="HomePage" component={HomeScreen} />
    <HomeStack.Screen name="CommentPage" component={CommentScreen} />
    <HomeStack.Screen name="PostQuotePage" component={PostQuoteScreen} />
  </HomeStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator screenOptions={{headerShown: false}}>
    <ProfileStack.Screen name="ProfilePage" component={ProfileScreen} />
    <ProfileStack.Screen name="CommentPage" component={CommentScreen} />
    <ProfileStack.Screen name="SettingPage" component={SettingScreen} />
    <ProfileStack.Screen name="EditProfilePage" component={EditProfileScreen} />
  </ProfileStack.Navigator>
);

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="HomeStack"
    activeColor="white"
    barStyle={{backgroundColor: '#7182BD'}}>
    <Tab.Screen
      name="HomeStack"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#7182BD',
        tabBarIcon: ({color, focused}) => (
          <Icon name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="DailyQuoteStack"
      component={DailyQuoteScreen}
      options={{
        tabBarLabel: 'Daily Quote',
        tabBarColor: '#7182BD',
        tabBarIcon: ({color}) => (
          <Icon name="format-quote-close" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="SearchScreenStack"
      component={SearchScreen}
      options={{
        tabBarLabel: 'Search',
        tabBarColor: '#7182BD',
        tabBarIcon: ({color}) => (
          <Icon name="magnify" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="ProfileScreenStack"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#7182BD',
        tabBarIcon: ({color}) => (
          <Icon name="account-circle" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;
