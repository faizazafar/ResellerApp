import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import TextInputClass from '../../components/TextInput';
import TextTicker from 'react-native-text-ticker';
import Ticker from './Ticker';
import OrderPromotion from './OrderPromotion';
import Products from './Products';
import LatestProduct from './LatestProduct';
import FeatureProduct from './FeatureProducts';
import TopSellingProduct from './TopSellingProduct';
import {useNavigation} from '@react-navigation/native';
const Product = [
  {
    image: require('../../Images/p1.png'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '0.0',
    deliveryPrice: 99,
    CatName: 'Replica Mania',
  },
  {
    image: require('../../Images/p2.png'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '0.0',
    deliveryPrice: 99,
    CatName: 'Replica Mania',
  },
  {
    image: require('../../Images/p3.png'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '0.0',
    deliveryPrice: 99,
    CatName: 'Replica Mania',
  },
  {
    image: require('../../Images/p4.png'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '0.0',
    deliveryPrice: 99,
    CatName: 'Replica Mania',
  },
  {
    image: require('../../Images/p5.png'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '0.0',
    deliveryPrice: 99,
    CatName: 'Replica Mania',
  },
  {
    image: require('../../Images/p1.png'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '0.0',
    deliveryPrice: 99,
    CatName: 'Replica Mania',
  },
  {
    image: require('../../Images/p2.png'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '0.0',
    deliveryPrice: 99,
    CatName: 'Replica Mania',
  },
  {
    image: require('../../Images/p3.png'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '0.0',
    deliveryPrice: 99,
    CatName: 'Replica Mania',
  },

  {
    image: require('../../Images/p4.png'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '0.0',
    deliveryPrice: 99,
    CatName: 'Replica Mania',
  },
  {
    image: require('../../Images/p5.png'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '0.0',
    deliveryPrice: 99,
    CatName: 'Replica Mania',
  },
];

export default function index() {
  const nav = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          borderRadius: 5,
          justifyContent: 'center',
          alignItem: 'center',
          marginTop: 10,
          paddingBottom: 80,
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
        <Products navigation={nav} item={Product} />
        <LatestProduct navigation={nav} item={Product} />
        <FeatureProduct navigation={nav} item={Product} />
        <TopSellingProduct navigation={nav} item={Product} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
