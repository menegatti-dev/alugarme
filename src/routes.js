import React from 'react';
import {
  Image
} from "react-native";

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Feed from './Pages/Feed';
const AppNavigator = createBottomTabNavigator({
    Feed:{
      screen: Feed,
    }
},{
  initialRouteName: 'Feed',
  tabBarOptions:{
    showLabel: false,
    activeTintColor: '#000000',
    style:{
      backgroundColor: '#f27405'
    }
  },

  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, tintColor}) =>{
      const { routeName } = navigation.state;

      if (focused && routeName === 'Feed') {
        return <Image source={require('./Assets/search-focus.png')} style={{width: 31, height: 31}} />;
      } else if (routeName === 'Feed') {
        return <Image source={require('./Assets/search.png')} style={{width: 31, height: 31}} />;
      }
    }
  })
});

const routes = createAppContainer(
  createSwitchNavigator(
    {
      Login: Login,
      App: AppNavigator,
    },
    {
      initialRouteName: 'Login',
    }
  )
);

export default routes;