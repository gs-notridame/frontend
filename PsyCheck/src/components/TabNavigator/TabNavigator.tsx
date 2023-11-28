// TabNavigator.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Portal from '../../screens/Portal';
import Vendors from '../../screens/Vendors';
import History from '../../screens/History';
import Profile from '../../screens/Profile';
import TabBarIconComponent from './TabBarIcon';
import {tabBarOptions} from './style';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: ({focused}) => (
        <TabBarIconComponent routeName={route.name} focused={focused} />
      ),
      ...tabBarOptions,
    })}>
    <Tab.Screen name="Início" component={Portal} />
    <Tab.Screen name="Diagnóstico" component={Vendors} />
    <Tab.Screen name="Agendar" component={History} />
    <Tab.Screen name="Recomendação" component={Profile} />
  </Tab.Navigator>
);

export default TabNavigator;
