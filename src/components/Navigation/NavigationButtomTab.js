import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'

import Reports from '../../screens/ReportScreen/Reports';
import Graphics from '../../screens/GraphicsScreen/Graphics';
import Profile from '../../screens/ProfileScreen/Profile';

const Tab = createMaterialBottomTabNavigator();

function ButtomTab() {
  return (

    < Tab.Navigator
      initialRouteName="Reports"
      activeColor="#EDF5F2"
      inactiveColor="gray"
      barStyle={{ backgroundColor: '#253659' }}
    >
      <Tab.Screen
        name="Reports"
        component={Reports}
        options={{
          
          tabBarLabel: 'Registros',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard-text-multiple" color={color} size={26} />
          ),
        }}

      />
      <Tab.Screen
        name="Graphics"
        component={Graphics}
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