import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import New from './New';
import Existing from './Existing';

const Tab = createMaterialTopTabNavigator();

const CustomerDetails = () => {
  return (
    <View style={{flex:1 , backgroundColor:"white"}}>
    <Tab.Navigator
    sceneContainerStyle={{backgroundColor:"white"}}
    style={{width:"100%" , padding:10 }}
    screenOptions={{
      tabBarStyle:{ borderRadius:5},
      tabBarLabelStyle: {fontSize: 12},
      tabBarActiveTintColor: '#e91e63',
      tabBarIndicatorStyle: {backgroundColor: '#d44f46'},
    }}>
    <Tab.Screen
      name="New"
      component={New}
      
    />
    <Tab.Screen
      name="Existing"
      component={Existing}
    
    />
    
  </Tab.Navigator>
  </View>
  )
}

export default CustomerDetails

const styles = StyleSheet.create({})