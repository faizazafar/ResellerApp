import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../Views/SignUp';
import SignIn from '../Views/SignIn';
import OTP from '../Views/OTP';
import Dashboard from '../Views/Dashboard';


const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName={'SignIn'}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OTP"
        component={OTP}
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

{/* <Stack.Screen
      name="Catalogs"
      component={Dashboard}
      options={{
        headerShown: false,
      }}
      />

<Stack.Screen
      name="Orders"
      component={Dashboard}
      options={{
        headerShown: false,
      }}
      />

<Stack.Screen
      name="Orderd"
      component={Dashboard}
      options={{
        headerShown: false,
      }}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
