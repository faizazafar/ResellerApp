import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabbar from '../../navigation/Tabbar';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Search from '../../components/Search';
import {getProducts} from '../../components/Products'

const Dashboard = ({navigation}) => {
  const [defaultrating, setDefaultRating] = useState(0);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const star_fill = '../../assets/star_filled.png';
  const star_unfill = '../../assets/star-unfill.png';

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  console.log(products)

  // const Products= {

  //   replicaMania : [
  //     {
  //       id: '1',
  //       productName: 'Casual Dress',
  //       price: '43',
  //       image: require('../../assets/dress3.jpg'),
  //     },
  
  //     {
  //       id: '2',
  //       productName: 'Formal Dress',
  //       price: '60',
  //       image: require('../../assets/dress4.jpg'),
  //     },
  //   ],
  //   topSelling :[
  //     {
  //       id: '1',
  //       productName: 'Casual Dress',
  //       price: '43',
  //       image: require('../../assets/cloth.jpg'),
  //     },
  
  //     {
  //       id: '2',
  //       productName: 'Formal Dress',
  //       price: '60',
  //       image: require('../../assets/dress2.jpg'),
  //     },
  //   ],
  //   topSharedProducts : [
  //     {
  //       id: '6',
  //       productName: 'Dress',
  //       price: '500',
  //       image: require('../../assets/dress5.jpg'),
  //     },
  
  //     {
  //       id: '7',
  //       productName: 'Formal Dress',
  //       price: '900',
  //       image: require('../../assets/dress2.jpg'),
  //     },
  //   ]
  // }

  // const replicaMania = [
  //   {
  //     id: '1',
  //     productName: 'Casual Dress',
  //     price: '43',
  //     image: require('../../assets/dress3.jpg'),
  //   },

  //   {
  //     id: '2',
  //     productName: 'Formal Dress',
  //     price: '60',
  //     image: require('../../assets/dress4.jpg'),
  //   },
  // ];

  // const topSelling = [
  //   {
  //     id: '1',
  //     productName: 'Casual Dress',
  //     price: '43',
  //     image: require('../../assets/cloth.jpg'),
  //   },

  //   {
  //     id: '2',
  //     productName: 'Formal Dress',
  //     price: '60',
  //     image: require('../../assets/dress2.jpg'),
  //   },
  // ];

  // const topSharedProducts = [
  //   {
  //     id: '6',
  //     productName: 'Dress',
  //     price: '500',
  //     image: require('../../assets/dress5.jpg'),
  //   },

  //   {
  //     id: '7',
  //     productName: 'Formal Dress',
  //     price: '900',
  //     image: require('../../assets/dress2.jpg'),
  //   },
  // ];


  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: 'white',
        paddingBottom: 120,
      }}>
      <Header />
      <View style={{marginHorizontal: 10}}>
        <Search />

        <View
          style={{
            borderRadius: 10,
            borderColor: 'black',
            justifyContent: 'space-around',
            flexDirection: 'row',
            backgroundColor: '#F0F0F0',
            padding: 10,
            marginBottom: 10,
            shadowColor: 'black',
            shadowOffset: {
              height: 0,
              width: 0,
            },
            elevation: 2,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                width: 35,
                height: 35,
                alignItems: 'center',
                marginVertical: 10,
                tintColor: '#d44f46',
              }}
              source={require('../../assets/orderdeliver.png')}
            />
            <Text
              style={{
                alignItems: 'center',
                fontSize: 15,
                paddingLeft: 16,
                alignSelf: 'center',
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#d44f46',
              }}>
              0/10{'\n'}Delivered Orders
            </Text>
          </View>
          {/* <Text style={{ alignItems:"center"}}>delivered  contents</Text> */}

          <View style={styles.verticleLine}></View>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              alignSelf: 'center',
              textAlign: 'center',
            }}>
            On Every 10th {'\n'}Delivery Get Rs 1000 {'\n'}bonus
          </Text>
        </View>
{/* {console.log(replicaMania.id)} */}
         <Card mainTitle={'Replica Mania'} items={products.slice(0,2)} 
        />

        <Card mainTitle={'Top Selling Products'} items={products.slice(2,4)} navigation={navigation}/>

        <Card mainTitle={'Top Shared Products'} items={products.slice(4,6)} /> 
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 10,
    marginVertical: 20,
    width: '50%',
  },
  thumb: {
    height: 120,
    width: 120,

    // borderTopLeftRadius: 16,
    // borderTopRightRadius: 16,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
  },
  customRatingStyle: {
    flexDirection: 'row',
    marginTop: 2,
  },
  starIMG: {
    width: 14,
    height: 14,
    resizeMode: 'cover',
    marginRight: 2,
  },
  verticleLine: {
    height: '90%',
    width: 1,
    backgroundColor: '#D3D3D3',
    marginTop: 3,
  },
});
