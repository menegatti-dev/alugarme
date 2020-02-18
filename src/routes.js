import React from 'react';
import {
  Image
} from "react-native";

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from './Pages/Login';
import Boletos from './Pages/Boletos';
import Accept from './Pages/Accept';
import Add from './Pages/Add';
import Transferencia from './Pages/Transferencia';
import Feed from './Pages/Feed';
import NovaSolicitacao from './Pages/NovaSolicitacao';
import Register from './Pages/Register';

const AppNavigator = createBottomTabNavigator({
    Feed:{
      screen: Feed,
    },
    Boletos:{
      screen: Boletos
    },
    Add:{
      screen: Add
    },
    Transferencia:{
      screen: Transferencia
    },
    Accept:{
      screen: Accept
    },
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

      if (focused && routeName === 'Boletos') {
        return <Image source={require('./Assets/barcode-focus.png')} style={{width: 31, height: 31}} />;
      } else if (routeName === 'Boletos') {
        return <Image source={require('./Assets/barcode.png')} style={{width: 31, height: 31}} />;
      }

      if (focused && routeName === 'Add') {
        return <Image source={require('./Assets/add-focus.png')} style={{width: 40, height: 40}} />;
      } else if (routeName === 'Add') {
        return <Image source={require('./Assets/add.png')} style={{width: 40, height: 40}} />;
      }

      if (focused && routeName === 'Transferencia') {
        return <Image source={require('./Assets/transferencia-focus.png')} style={{width: 31, height: 31}} />;
      } else if (routeName === 'Transferencia') {
        return <Image source={require('./Assets/tranferencia.png')} style={{width: 31, height: 31}} />;
      }

      if (focused && routeName === 'Accept') {
        return <Image source={require('./Assets/accept-focus.png')} style={{width: 31, height: 31}} />;
      } else if (routeName === 'Accept') {
        return <Image source={require('./Assets/accept.png')} style={{width: 31, height: 31}} />;
      }
    }
  })
});



const routes = createAppContainer(
  createSwitchNavigator(
    {
      Login: Login,
      App: AppNavigator,
      NovaSolicitacao: NovaSolicitacao,
      Register: Register
    },
    {
      initialRouteName: 'Login',
    }
  )
);

export default routes;