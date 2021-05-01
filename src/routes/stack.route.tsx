import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import UserIndentification from '../screens/UserIndentification';
import Confirmation from '../screens/Confirmation'
import Home from '../screens/Home';
import PlantSalve from '../screens/PlantSalve';
import MyPlants from '../screens/MyPlants';

import { COLORS } from '../constants';
import TabRoutes from './tab.route';

const Stack = createStackNavigator();

const StackRoute: React.FC = () =>(
    <Stack.Navigator  
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: COLORS.white
        }
      }}
    >
      <Stack.Screen  name='Welcome' component={Welcome}/>
      <Stack.Screen  name='UserIndentification' component={UserIndentification}/>
      <Stack.Screen  name='Confirmation' component={Confirmation}/>
      <Stack.Screen  name='Home' component={TabRoutes}/>
      <Stack.Screen  name='PlantSalve' component={PlantSalve}/>
      <Stack.Screen  name='MyPlants' component={TabRoutes}/>
    </Stack.Navigator>
);

export default StackRoute;