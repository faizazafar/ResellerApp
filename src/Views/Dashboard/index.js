import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import TextInputClass from '../../Components/TextInput';
import TextTicker from 'react-native-text-ticker';
import Ticker from './Ticker';
import OrderPromotion from './OrderPromotion';
import Products from './Products';
import LatestProduct from './LatestProduct';
import FeatureProduct from './FeatureProducts';
import TopSellingProduct from './TopSellingProduct';
export default function index() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          borderRadius: 5,
          //   marginHorizontal: 15,
          justifyContent: 'center',
          alignItem: 'center',
          marginTop: 10,
        }}
        style={{
          flex: 1,
        }}>
        <TextInputClass
          style={{
            flex: 1,
            height: 35,
          }}
          imageStyle={{
            width: 20,
            height: 20,
            alignSelf: 'center',
            tintColor: 'grey',
          }}
          image={require('../../Images/search.png')}
          placeholder="Product search karain"
        />
        <Ticker />
        <OrderPromotion />
        <Products />
        <LatestProduct />
        <FeatureProduct />
        <TopSellingProduct />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
