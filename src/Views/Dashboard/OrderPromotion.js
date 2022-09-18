import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

export default function OrderPromotion() {
  return (
    <View style={{paddingHorizontal: 15, flex: 1, marginTop: 30}}>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#d81536',
          flexDirection: 'row',
          padding: 10,
        }}>
        <Text
          style={{
            flex: 1,
            color: 'black',
            fontSize: 16,
            fontWeight: '600',
            marginLeft: 10,
          }}>
          Apna karobar shoru karain asaani say
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: '#d81536',
            borderRadius: 10,
            padding: 10,
            paddingHorizontal: 10,
            flexDirection: 'row',
            width: 100,
            justifyContent: 'space-around',
          }}>
          <Image
            style={{
              width: 20,
              height: 20,
              tintColor: 'white',
            }}
            source={require('../../Images/video.png')}
          />
          <Text style={{color: 'white'}}>Watch{'\n'}Videos</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#f2f2f2',
          marginTop: 20,
          padding: 5,
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
          borderRadius: 10,
        }}>
        <View style={{}}>
          <Image
            style={{width: 20, height: 20, tintColor: '#d81536'}}
            source={require('../../Images/cart.png')}
          />
          <Text style={{color: '#d81536', fontSize: 26}}>
            0/10{'\n'}
            <Text style={{fontSize: 14}}>Delivered Orders</Text>
          </Text>
        </View>
        {/* <View
          style={{
            borderWidth: 1,
            width: 0.3,
            height: 50,
            borderColor: 'grey',
            alignSelf: 'center',
          }}></View> */}
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: '600',
            }}>
            Har 10 order deliver{'\n'}honay pe Rs.1,000 ka{'\n'}bonus paen!
          </Text>
        </View>
      </View>
    </View>
  );
}
