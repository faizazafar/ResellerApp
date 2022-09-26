import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ShareCatalog from './ShareCatalog';
import ShareProduct from './ShareProduct';

const Tab = createMaterialTopTabNavigator();

const Shares = () => {
  return (
    <Tab.Navigator
      style={{width:"100%" , padding:10 }}
      screenOptions={{
        tabBarStyle:{ borderRadius:5},
        tabBarLabelStyle: {fontSize: 12},
        tabBarActiveTintColor: '#e91e63',
        tabBarIndicatorStyle: {backgroundColor: '#d44f46'},
      }}>
      <Tab.Screen
        name="Catalog"
        component={ShareCatalog}
        
      />
      <Tab.Screen
        name="Products"
        component={ShareProduct}
      
      />
      
    </Tab.Navigator>
  );
};

export default Shares;

const styles = StyleSheet.create({});
