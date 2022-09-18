// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import React from 'react';
// import {View, Text} from 'react-native';
// export default function componentName() {
//   const Stack = createNativeStackNavigator();

//   return (
//     <Stack.Navigator initialRouteName={'Dashboard'}>
//       <Stack.Screen
//         name="Dashboard"
//         component={Dashboard}
//         options={{
//           headerShown: false,
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

import {Text, View} from 'react-native';
import Dashboard from '../Views/Dashboard/index';
import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabbar from './Tabbar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Orders from '../Views/Orders';
import CustomDrawer from './CustomDrawer';
import Categories from '../Views/Categories';
const Drawers = createDrawerNavigator();

const Stack = createNativeStackNavigator();
export default class MainStack extends Component {
  render() {
    return (
      <Drawers.Navigator
        screenOptions={{ drawerStyle:{width:"100%", backgroundColor:"white" }}} drawerContent={props=><CustomDrawer {...props}/>} initialRouteName={'Tabbar'}>
        <Drawers.Screen
          name="Tabbar"
          component={Tabbar}
          options={{
            headerShown: false,
          }}
        />
          <Drawers.Screen
          name="Orders"
          component={Orders}
          options={{
            headerShown: false,
          }}
        />
        <Drawers.Screen
          name="Categories"
          component={Categories}
          options={{
            headerShown: false,
          }}
        />
        {/* <Drawers.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        /> */}
      </Drawers.Navigator>
    );
  }
}
