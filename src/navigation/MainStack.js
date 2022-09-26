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
import BusinessDetails from '../Views/Profile/BusinessDetails';
const Stack = createNativeStackNavigator();
export default class MainStack extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'BusinessDetails'}>
        <Stack.Screen
          name="Tabbar"
          component={Tabbar}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}
