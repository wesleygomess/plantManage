import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { COLORS } from '../constants';
import { MaterialIcons } from '@expo/vector-icons';
import MyPlants from '../screens/MyPlants';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return(
    <Tab.Navigator 
      tabBarOptions={{
        activeTintColor: COLORS.green,
        inactiveTintColor: COLORS.heading,
        labelPosition: 'beside-icon',
        style: {
          // paddingVertical: 20,
          height: 70,
          
        },
      }}
    >
      <Tab.Screen 
        name='Nova Planta' 
        component={Home} 
        options={{
          tabBarIcon: (({ size, color})=> (
            <MaterialIcons 
              name='add-circle-outline'
              size={size}
              color={color}
            />
          ))
        }}
      />
      <Tab.Screen 
        name='Minhas Plantas' 
        component={MyPlants} 
        options={{
          tabBarIcon: (({ size, color})=> (
            <MaterialIcons 
              name='format-list-bulleted'
              size={size}
              color={color}
            />
          ))
        }}
      />
    </Tab.Navigator>
  )
}

export default TabRoutes