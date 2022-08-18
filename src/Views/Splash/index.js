import {Text, View, Dimensions} from 'react-native';
import React, {Component} from 'react';
import Lottie from 'lottie-react-native';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
export default class index extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('Onboarding');
    }, 3500);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Lottie
          style={{flex: 1}}
          source={require('../../Images/splash.json')}
          autoPlay
          loop
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 60,
            color: '#d81536',
            position: 'absolute',
            left: 0,
            right: 0,
            top: screen.height /2.5 ,
            bottom: 0,
            zIndex: 99,
            fontWeight: '900',
          }}>
          R
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
              color: 'black',
              position: 'absolute',
              left: 0,
              right: 0,
              top:200,
              bottom: 0,
              zIndex: 99,
              fontWeight: '900',
            }}>
            eseller
          </Text>
        </Text>
      </View>
    );
  }
}
