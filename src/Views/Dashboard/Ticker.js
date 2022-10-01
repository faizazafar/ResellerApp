import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import TextTicker from 'react-native-text-ticker';
import {DrawerActions} from '@react-navigation/native';

export default function Ticker({navigation}) {
  return (
    <View
      style={{
        backgroundColor: '#d81536',
        marginTop: 10,
        marginHorizontal: 15,
        paddingHorizontal: 10,
      }}>
      <TextTicker
        style={{fontSize: 14, paddingVertical: 8, color: 'white'}}
        duration={10000}
        loop
        bounce
        repeatSpacer={50}
        marqueeDelay={1000}>
        Super long piece of text is long. The quick brown fox jumps over the
        lazy dog.:-)
      </TextTicker>
    </View>
  );
}
