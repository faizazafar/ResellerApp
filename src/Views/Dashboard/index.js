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
import Search from '../../components/Search'
import {useNavigation} from '@react-navigation/native';
import Product from '../../components/Products';
// const Product = [
//   {
//     id:1,
//     image: require('../../Images/p1.png'),
//     price: 555,
//     pname: 'Special Nike Shoes',
//     rating: '0.0',
//     deliveryPrice: 99,
//     CatName: 'Replica Mania',
//   },
//   {
//     id:2,
//     image: require('../../Images/p2.png'),
//     price: 555,
//     pname: 'Special Nike Shoes',
//     rating: '0.0',
//     deliveryPrice: 99,
//     CatName: 'Replica Mania',
//   },
//   {
//     id:3,
//     image: require('../../Images/p3.png'),
//     price: 555,
//     pname: 'Special Nike Shoes',
//     rating: '0.0',
//     deliveryPrice: 99,
//     CatName: 'Replica Mania',
//   },
//   {id:5,
//     image: require('../../Images/p4.png'),
//     price: 555,
//     pname: 'Special Nike Shoes',
//     rating: '0.0',
//     deliveryPrice: 99,
//     CatName: 'Replica Mania',
//   },
//   {id:6,
//     image: require('../../Images/p5.png'),
//     price: 555,
//     pname: 'Special Nike Shoes',
//     rating: '0.0',
//     deliveryPrice: 99,
//     CatName: 'Replica Mania',
//   },
//   {id:7,
//     image: require('../../Images/p1.png'),
//     price: 555,
//     pname: 'Special Nike Shoes',
//     rating: '0.0',
//     deliveryPrice: 99,
//     CatName: 'Replica Mania',
//   },
//   { id:8,
//     image: require('../../Images/p2.png'),
//     price: 555,
//     pname: 'Special Nike Shoes',
//     rating: '0.0',
//     deliveryPrice: 99,
//     CatName: 'Replica Mania',
//   },
//   {id:9,
//     image: require('../../Images/p3.png'),
//     price: 555,
//     pname: 'Special Nike Shoes',
//     rating: '0.0',
//     deliveryPrice: 99,
//     CatName: 'Replica Mania',
//   },

//   { id:10,
//     image: require('../../Images/p4.png'),
//     price: 555,
//     pname: 'Special Nike Shoes',
//     rating: '0.0',
//     deliveryPrice: 99,
//     CatName: 'Replica Mania',
//   },
//   { id:11,
//     image: require('../../Images/p5.png'),
//     price: 555,
//     pname: 'Special Nike Shoes',
//     rating: '0.0',
//     deliveryPrice: 99,
//     CatName: 'Replica Mania',
//   },
// ];


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
          <Search/>
        {/* <TextInputClass
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
        /> */}
        <Ticker />
        <OrderPromotion />
        <Products navigation={nav} item={Product}/>
        <LatestProduct navigation={nav} item={Product} />
        <FeatureProduct navigation={nav} item={Product} />
        <TopSellingProduct navigation={nav} item={Product} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
