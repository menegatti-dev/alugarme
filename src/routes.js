import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login from './Pages/Login';
import Register from './Pages/Register';
const AppStack = createBottomTabNavigator({
    Register: Register
});

const routes = createAppContainer(
  createSwitchNavigator(
    {
      Login: Login,
      App: AppStack,
    },
    {
      initialRouteName: 'Login',
    }
  )
);

export default routes;