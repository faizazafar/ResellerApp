import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
const Data = [
  {
    ScreenName: 'Mera Profit',
    icon: require('../../Images/coin.png'),
  },
  {
    ScreenName: 'Bank Details Add Kerain',
    icon: require('../../Images/bank.png'),
  },
  {
    ScreenName: 'Help',
    icon: require('../../Images/help.png'),
  },
  {ScreenName: 'Business ki detail', icon: require('../../Images/bulb.png')},
  {
    ScreenName: 'Followed Shops',
    icon: require('../../Images/shop.png'),
  },
];
export default class index extends Component {
  render() {
    return (
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <Text
          style={{
            marginTop: 10,
            fontSize: 24,
            fontFamily: 'Poppins-SemiBold',
            fontWeight: '800',
          }}>
          Hi, John
        </Text>
        <Image
          style={{
            width: 70,
            height: 70,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginTop: 20,
          }}
          source={require('../../Images/collectcoin.png')}
        />
        <Text
          style={{
            marginTop: 10,
            textAlign: 'center',
            fontSize: 18,
            fontFamily: 'Poppins-SemiBold',
            fontWeight: '600',
          }}>
          Is Mahinay ka Profit
        </Text>
        <Text
          style={{
            marginTop: 10,
            textAlign: 'center',
            fontSize: 18,
            fontFamily: 'Poppins-SemiBold',
            fontWeight: 'bold',
          }}>
          Rs: 0
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View
            style={{
              paddingVertical: 15,
              width: 150,
              borderWidth: 1,
              borderColor: 'grey',
              borderRadius: 10,
            }}>
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: 'orange',
                alignSelf: 'center',
              }}
              source={require('../../Images/stats.jpg')}
            />
            <Text
              style={{
                marginTop: 10,
                textAlign: 'center',
                fontSize: 18,
                fontFamily: 'Poppins-SemiBold',
                fontWeight: 'bold',
              }}>
              Total Orders
            </Text>
            <Text
              style={{
                marginTop: 10,
                textAlign: 'center',
                fontSize: 18,
                fontFamily: 'Poppins-SemiBold',
                fontWeight: 'bold',
              }}>
              0
            </Text>
          </View>
          <View
            style={{
              width: 150,
              borderWidth: 1,
              borderColor: 'grey',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              paddingVertical: 15,
            }}>
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: 'orange',
                alignSelf: 'center',
              }}
              source={require('../../Images/stats.jpg')}
            />
            <Text
              style={{
                marginTop: 10,
                textAlign: 'center',
                fontSize: 18,
                fontFamily: 'Poppins-SemiBold',
                fontWeight: 'bold',
              }}>
              Total Orders Value
            </Text>
            <Text
              style={{
                marginTop: 10,
                textAlign: 'center',
                fontSize: 18,
                fontFamily: 'Poppins-SemiBold',
                fontWeight: 'bold',
              }}>
              Rs: 0
            </Text>
          </View>
        </View>
        {Data.map((item, index) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
                borderWidth: 0.3,
                padding: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  fontFamily: 'Poppins-SemiBold',
                  fontWeight: 'bold',
                }}>
                {item.ScreenName}
              </Text>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  tintColor: 'orange',
                  resizeMode: 'contain',
                }}
                source={item.icon}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
