import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
export default class index extends Component {
  state = {
    selected: '',
  };
  renderOnboardingTwo() {
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <Image
          style={{width: '100%', height: 320, resizeMode: 'contain'}}
          source={require('../../Images/ob2.png')}
        />
        <Text
          style={{
            marginTop: 40,
            fontSize: 50,
            color: 'black',
            textAlign: 'center',
            flex: 1,
            fontFamily: 'NanumMyeongjo-Bold',
          }}>
          Your satisfaction is our number one priority
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={{
              padding: 10,
              flex: 0.4,
              backgroundColor: '#d81536',
              justifyContent: 'flex-end',
            }}
            onPress={() => {
              this.setState({selected: 'one'});
              this.renderOnboardingOne();
            }}>
            <View style={{justifyContent: 'flex-end'}}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'white',
                  textAlign: 'center',
                  fontFamily: 'JuliusSansOne-Regular',
                }}>
                Previous
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              flex: 0.4,
              backgroundColor: '#d81536',
              justifyContent: 'flex-end',
            }}
            onPress={() => {
              this.setState({selected: 'three'});
              //   this.renderOnboardingOne();
            }}>
            <View style={{justifyContent: 'flex-end'}}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'white',
                  textAlign: 'center',
                  fontFamily: 'JuliusSansOne-Regular',
                }}>
                Next
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  renderOnboardingThree() {
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <Image
          style={{width: '100%', height: 320, resizeMode: 'contain'}}
          source={require('../../Images/ob3.png')}
        />
        <Text
          style={{
            marginTop: 40,
            fontSize: 50,
            color: 'black',
            textAlign: 'center',
            flex: 1,
            fontFamily: 'NanumMyeongjo-Bold',
          }}>
          Let's fullfill your daily needs with reseller right now!
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={{
              padding: 10,
              flex: 0.4,
              backgroundColor: '#d81536',
              justifyContent: 'flex-end',
            }}
            onPress={() => {
              this.setState({selected: 'two'});
              this.renderOnboardingOne();
            }}>
            <View style={{justifyContent: 'flex-end'}}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'white',
                  textAlign: 'center',
                  fontFamily: 'JuliusSansOne-Regular',
                }}>
                Previous
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              flex: 0.4,
              backgroundColor: '#d81536',
              justifyContent: 'flex-end',
            }}
            onPress={() => {
              this.setState({selected: 'three'});
              //   this.renderOnboardingOne();
            }}>
            <View style={{justifyContent: 'flex-end'}}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'white',
                  textAlign: 'center',
                  fontFamily: 'JuliusSansOne-Regular',
                }}>
                Next
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  renderOnboardingOne() {
    return (
      <View style={{flex: 1}}>
        <Image
          style={{width: '100%', height: 320, resizeMode: 'contain'}}
          source={require('../../Images/ob1.png')}
        />
        <Text
          style={{
            paddingHorizontal: 30,
            marginTop: 40,
            fontSize: 50,
            color: 'black',
            textAlign: 'center',
            flex: 1,
            // fontWeight: 'bold',
            fontFamily: 'NanumMyeongjo-Bold',
          }}>
          We provide high Quality products just for you
        </Text>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: '#d81536',
            justifyContent: 'flex-end',
          }}
          onPress={() => {
            this.setState({selected: 'two'});
            this.renderOnboardingOne();
          }}>
          <View style={{justifyContent: 'flex-end'}}>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                textAlign: 'center',
                fontFamily: 'JuliusSansOne-Regular',
              }}>
              Next
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={{flex: 1, marginTop: 50}}>
        {this.state.selected == 'two'
          ? this.renderOnboardingTwo()
          : this.state.selected == 'three'
          ? this.renderOnboardingThree()
          : this.renderOnboardingOne()}
      </View>
    );
  }
}
