import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'

import Page1 from '../../screens/Page1';
import Page2 from '../../screens/Page2';
import Profile from '../../screens/Profile';

const Tab = createMaterialBottomTabNavigator();

function ButtomTab() {
  return (

    < Tab.Navigator
      initialRouteName="Page1"
      activeColor="#253659"
      inactiveColor="#EDF5F2"
      barStyle={{ backgroundColor: '#03A696' }}
    >
      <Tab.Screen
        name="Page1"
        component={Page1}
        options={{
          tabBarLabel: 'Registros',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard-text-multiple" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Page2"
        component={Page2}
        options={{
          tabBarLabel: 'Graficos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-areaspline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default ButtomTab;