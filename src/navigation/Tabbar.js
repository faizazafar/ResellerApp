import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from '../Views/SignIn';

const Tab = createBottomTabNavigator();

const Tabbar = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={SignIn} />
    <Tab.Screen name="Settings" component={SignIn} />
  </Tab.Navigator>
  )
}

export default Tabbar

const styles = StyleSheet.create({})