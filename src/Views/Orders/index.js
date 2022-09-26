import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Pending from './Pending';
import Returned from './Returned';
import Delivered from './Delivered';

const Tab = createMaterialTopTabNavigator();

 function MyTabBar (){

 }

const Orders = () => {
  return (
<Tab.Navigator screenOptions={{
    tabBarLabelStyle: { fontSize: 12  },
    tabBarActiveTintColor: '#e91e63',
    tabBarIndicatorStyle:{backgroundColor:"#d44f46"}
  }} >
    <Tab.Screen name="Pending" component={Pending}  options={
      {
        tabBarIcon: ({focused}) => (
          <View >
            <Image
              source={require('../../assets/pending.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor:"#d44f46"
              }}
            />
          </View>
        ),
      }
    }
    />
    <Tab.Screen name="Returned" component={Returned}  options={
      {
        tabBarIcon: ({focused}) => (
          <View >
            <Image
              source={require('../../assets/return.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor:"#d44f46"
              }}
            />
          </View>
        ),
      }
    }/>
    <Tab.Screen name="Delivered" options={
      {
        tabBarIcon: ({focused}) => (
          <View >
            <Image
              source={require('../../assets/ship.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor:"#d44f46"
              }}
            />
          </View>
        ),
      }
    }
    component={Delivered} />
  </Tab.Navigator>
  )
}

export default Orders

const styles = StyleSheet.create({})