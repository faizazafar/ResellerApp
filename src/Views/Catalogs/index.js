import {Text, View} from 'react-native';
import React, {Component} from 'react';

export default class index extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text
          style={{
            padding: 10,
            marginTop: 30,
            fontSize: 18,
            fontWeight: '800',
            color: 'black',
          }}>
          Recently Viewed Catalog
        </Text>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '800',
              color: 'black',
            }}>
            No Catalog Viewed
          </Text>
        </View>
      </View>
    );
  }
}
