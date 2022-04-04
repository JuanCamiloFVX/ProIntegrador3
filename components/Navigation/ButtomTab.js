import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { enableScreens } from 'react-native-screens';
import React from 'react'
import paper from 'react-native-paper';

import Page1 from '../../screens/Page1';
import Page2 from '../../screens/Page2';
import Page3 from '../../screens/Page3';

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
        name="Page3"
        component={Page3}
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