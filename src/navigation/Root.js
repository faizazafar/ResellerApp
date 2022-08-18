import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import Splash from '../Views/Splash';
import Onboarding from '../Views/Onboarding';

const Root = () => {
  const Root = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Root.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Splash'}>
        <Root.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Root.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
          }}
        />
        <Root.Screen
          name="AuthStack"
          component={AuthStack}
          options={{
            headerShown: false,
          }}
        />
        <Root.Screen
          name="MainStack"
          component={MainStack}
          options={{
            headerShown: false,
          }}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Root;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
