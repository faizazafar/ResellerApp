import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

export default class BusinessDetails extends Component {
  render() {
    return (
      <View style={{flex: 1, padding: 10}}>
        <TouchableOpacity
          onPress={() => {
            // this.props.navigation.goBack();
          }}>
          <Image
            style={{width: 30, resizeMode: 'contain', height: 30}}
            source={require('../../Images/back.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            marginTop: 30,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Aap kay Business ki Tafseelat
        </Text>
        <View style={{marginTop: 20}}>
          <TextInput
            placeholder="Name"
            style={{
              borderWidth: 0.3,
              marginVertical: 10,
              paddingLeft: 10,
              borderRadius: 9,
            }}
          />
          <TextInput
            placeholder="Address (Makan/Chowk)"
            style={{
              borderWidth: 0.3,
              marginVertical: 10,
              paddingLeft: 10,
              borderRadius: 9,
            }}
          />
          <TextInput
            placeholder="City"
            style={{
              borderWidth: 0.3,
              marginVertical: 10,
              paddingLeft: 10,
              borderRadius: 9,
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            marginTop: 30,
            padding: 10,
            borderRadius: 10,
            width: 200,
            alignSelf: 'center',
          }}
          onPress={() => {
            console.log(this.props);
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
