import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import Checkins from './pages/Checkins';

import Orders from './pages/HelpOrders/Orders';
import NewOrder from './pages/HelpOrders/NewOrder';
import ViewAnswer from './pages/HelpOrders/ViewAnswer';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Checkins,
            Orders: {
              screen: createStackNavigator(
                {
                  Orders,
                  NewOrder,
                  ViewAnswer,
                },
                {
                  defaultNavigationOptions: {
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                },
              ),
              navigationOptions: {
                tabBarLabel: 'Pedir ajuda',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="live-help" size={20} color={tintColor} />
                ),
              },
            },
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#ee4e62',
              inactiveTintColor: '#999999',
            },
          },
        ),
      },
      { initialRouteName: signedIn ? 'App' : 'Sign' },
    ),
  );
