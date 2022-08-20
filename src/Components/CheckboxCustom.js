import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

export default class CheckboxCustom extends Component {
  render() {
    const {status, onPress, color, size, backgroundColor} = this.props;
    return (
      <View
        style={{
          // backgroundColor: status ? backgroundColor : 'white',
          borderColor: color,
          width: size,
          height: size,
          borderWidth: 2,
          borderRadius: size / 6,
        }}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            flex: 1,
            margin: 0,
            padding: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {status ? (
            <Image
              style={{
                width: size * 0.66,
                height: size * 0.66,
                tintColor: color,
              }}
              source={require('../Images/checked.png')}
            />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  }
}
