import {Text, View} from 'react-native';
import React, {Component} from 'react';

export default class index extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '800',
            color: 'black',
          }}>
          No shops followed
        </Text>
      </View>
    );
  }
}
