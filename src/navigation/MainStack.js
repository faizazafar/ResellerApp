import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../Views/Dashboard';
import Tabbar from './Tabbar';

const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
        <Stack.Screen
        name="BOTTOM_TABS"
        component={Tabbar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
