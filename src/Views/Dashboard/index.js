import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import Search from '../../components/Search';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Product from '../../components/Products';
import ViewAll from './VIewAll';
import DropDownPicker from 'react-native-dropdown-picker';
import {useState} from 'react';
import Categories from '../Categories';
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
  const [open, setOpen] = useState(false);
  const [profitValue, setProfitValue] = useState(0);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    {label: 'Latest', value: 'Latest'},
    {label: 'Featured', value: 'Featured'},
    {label: 'Price low to high', value: 'Price low to high'},
    {label: 'Price High to ow', value: 'Price High to low'},
  ]);
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
        <Search />
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

        <Ticker navigation={nav} />
        <OrderPromotion />
        <Products navigation={nav} item={Product} />
        <LatestProduct navigation={nav} item={Product} />
        <FeatureProduct navigation={nav} item={Product} />
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: '900',
            paddingHorizontal: 20,
            marginBottom: 20,
          }}>
          {'Top Catalogs'}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <DropDownPicker
            containerStyle={{width: '100%'}}
            itemTextStyle={{backgroundColor: 'blue', textColor: 'white'}}
            textColor="#fff"
            style={{backgroundColor: '#fff', borderWidth: 0, elevation: 4}}
            // style={{ width:'50%'}}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
        <Categories />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
