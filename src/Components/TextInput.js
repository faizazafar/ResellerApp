import {Text, View, TextInput, Image} from 'react-native';
import React, {Component} from 'react';

export default class TextInputClass extends Component {
  state = {
    text: '',
  };
  render() {
    const {onChange, style, image, imageStyle, placeholder, pass} = this.props;
    return (
      <View style={{}}>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
          }}>
          <Image
            source={image}
            style={
              ({width: 20, height: 20, resizeMode: 'contain'}, [imageStyle])
            }
          />
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={'#9e9e9e'}
            onChangeText={onChange}
            style={style}
            secureTextEntry={pass}
          />
        </View>
      </View>
    );
  }
}
