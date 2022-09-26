import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../Views/Dashboard';
import Categories from '../Views/Categories';
import Orders from '../Views/Orders';
import Shares from '../Views/Shares';
import Profile from '../Views/Profile';
import ViewAll from '../Views/Dashboard/VIewAll';

import {Image} from 'react-native-animatable';
import * as Animatable from 'react-native-animatable';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from '../Views/ProductDetails';
<<<<<<< HEAD
import BusinessDetails from '../Views/Profile/BusinessDetails';
import PrivacyNote from '../Views/PrivacyNote/index';
import TermsCondition from '../Views/TermsCondition';
import FAQ from '../Views/FAQ/index';
=======
import CustomDrawer from './CustomDrawer';

>>>>>>> 33871dcd019010064aa14c0d5082741de22a1523
const Tab = createBottomTabNavigator();

// const CustomeTabBarButton =({children ,onPress})=>{

// <TouchableOpacity
// style={{  justifyContent:"center" , alignItems:"center" , ...styles.shadow}}
// onPress={onPress}

// >
//   <View
//   style={{width:70, height:70 , borderRadius:35, backgroundColor:"pink"}}
//   >
//     {children}

//   </View>

// </TouchableOpacity>
// }
const Stack = createNativeStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Dashboard'} component={Dashboard}></Stack.Screen>
      <Stack.Screen name={'AllItem'} component={ViewAll}></Stack.Screen>
<<<<<<< HEAD
      <Stack.Screen
        name={'ProductDetails'}
        component={ProductDetails}></Stack.Screen>
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PrivacyNote"
        component={PrivacyNote}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TermsCondition"
        component={TermsCondition}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BusinessDetails"
        component={BusinessDetails}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FAQ"
        component={FAQ}
        options={{
          headerShown: false,
        }}
      />
=======
      <Stack.Screen name={'ProductDetails'} component={ProductDetails}></Stack.Screen>


>>>>>>> 33871dcd019010064aa14c0d5082741de22a1523
    </Stack.Navigator>
  );
};
const Tabbar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          borderTopEndRadius: 30,
          borderTopLeftRadius: 30,
          backgroundColor: '#ffffff',
          elevation: 0,
          height: 70,
          position: 'absolute',
          bottom: 0,
          left: 10,
          right: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={DashboardStack}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Animatable.View
              style={{justifyContent: 'center', alignItems: 'center'}}
              animation={'bounceIn'}>
              <Image
                source={require('../../src/assets/homefill.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#d44f46' : 'grey',
                }}
              />
              <Text
                style={{
                  color: focused ? '#d44f46' : 'grey',
                  fontSize: 10,
                  textAlign: 'center',
                }}>
                Home
              </Text>
            </Animatable.View>
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({focused}) => (
            <Animatable.View
              animation={'bounceIn'}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../../src/assets/order.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#d44f46' : 'grey',
                }}
              />
              <Text
                style={{
                  color: focused ? '#d44f46' : 'grey',
                  fontSize: 10,
                  textAlign: 'center',
                }}>
                Order
              </Text>
            </Animatable.View>
          ),
        }}
      />

      <Tab.Screen
      // navigation.toggleDrawer();
        name="Categories"
        component={CustomDrawer}
        listeners={({ navigation }) => ({
          tabPress: e => {
            navigation.dispatch(navigation.toggleDrawer())
    
            e.preventDefault()
          }})}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 90,
                height: 90,
                backgroundColor: '#d44f46',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 50,
                ...styles.shadow,
              }}>
              <Image
                source={require('../../src/assets/categories.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: 'white',
                }}
              />
               <Text
                style={{
                  color: focused ? '#d44f46' : 'grey',
                  fontSize: 10,
                  textAlign: 'center',
                  color:"white",
                  marginTop:2
                }}>
                Categories
              </Text>
            </View>
          ),
          // tabBarButton:(props)=>(
          // <CustomeTabBarButton {...props}/>
          // )
        }}
      />

      <Tab.Screen
        name="Shares"
        component={Shares}
        options={{
          tabBarIcon: ({focused}) => (
            <Animatable.View
              animation={'bounceIn'}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../../src/assets/shares.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#d44f46' : 'grey',
                }}
              />
              <Text
                style={{
                  color: focused ? '#d44f46' : 'grey',
                  fontSize: 10,
                  textAlign: 'center',
                }}>
                Shares
              </Text>
            </Animatable.View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Animatable.View
              animation={'bounceIn'}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../../src/assets/pro.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#d44f46' : 'grey',
                }}
              />
              <Text
                style={{
                  color: focused ? '#d44f46' : 'grey',
                  fontSize: 10,
                  textAlign: 'center',
                }}>
                Profile
              </Text>
            </Animatable.View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabbar;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
