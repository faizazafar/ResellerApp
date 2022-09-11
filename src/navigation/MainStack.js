import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../Views/Dashboard';

const MainStack = () => {
  const MainStack = createNativeStackNavigator();

  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Dashboard'}>
      <MainStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
