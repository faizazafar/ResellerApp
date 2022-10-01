import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Root from './src/navigation/Root';
import {LogBox} from 'react-native';
import {NativeBaseProvider} from 'native-base';
LogBox.ignoreAllLogs();
export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <NativeBaseProvider>
          <Root />
        </NativeBaseProvider>
      </View>
    );
  }
}
