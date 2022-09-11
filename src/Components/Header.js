import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
// import {DrawerActions} from '@react-navigation/native';
export default class header extends Component {
  render() {
    // const {nav} = this.props;
    return (
      <View
        style={{
          paddingHorizontal: 10,
          padding: 10,
          flexDirection: 'row',
          backgroundColor: 'white',
          justifyContent: 'space-between',
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{
              width: 100,
              height: 40,
            }}
            source={require('../Images/logo.png')}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                borderRadius: 30,
                // marginLeft: 10,
                tintColor: 'black',
              }}
              source={require('../Images/notification.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{
                width: 30,
                height: 30,
                resizeMode: 'contain',
                borderRadius: 30,
                tintColor: 'black',
                marginLeft: 10,
              }}
              source={require('../Images/basket.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
