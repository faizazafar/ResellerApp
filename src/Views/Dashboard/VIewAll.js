import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import React, {Component} from 'react';
import {Rating} from 'react-native-ratings';
import CheckboxCustom from '../../components/CheckboxCustom';
const Product = [
  {
    image: require('../../Images/p1.png'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '0.0',
    deliveryPrice: 99,
  },
  {
    image: require('../../Images/p2.png'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '0.0',
    deliveryPrice: 99,
  },
  {
    image: require('../../Images/p3.png'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '0.0',
    deliveryPrice: 99,
  },
  {
    image: require('../../Images/p4.png'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '0.0',
    deliveryPrice: 99,
  },
  {
    image: require('../../Images/p5.png'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '0.0',
    deliveryPrice: 99,
  },
  {
    image: require('../../Images/p1.png'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '0.0',
    deliveryPrice: 99,
  },
  {
    image: require('../../Images/p2.png'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '0.0',
    deliveryPrice: 99,
  },
  {
    image: require('../../Images/p3.png'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '0.0',
    deliveryPrice: 99,
  },

  {
    image: require('../../Images/p4.png'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '0.0',
    deliveryPrice: 99,
  },
  {
    image: require('../../Images/p5.png'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '0.0',
    deliveryPrice: 99,
  },
];

export default class Products extends Component {
  state = {
    visible: false,
    ischeck1: false,
    ischeck2: false,
  };

  render() {
    return (
      <View style={{flex: 1, marginTop: 20}}>
        <View
          style={{
            justifyContent: 'space-between',
            marginTop: 20,
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '800',
              }}>
              {/* {this.props.route.params.Heading} */}
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={Product}
          contentContainerStyle={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 100,
          }}
          style={{flex: 1}}
          renderItem={(item, index) => {
            return (
              <View
                style={{
                  margin: 10,
                  borderRadius: 3,
                  borderWidth: 0.1,
                  marginHorizontal: 20,
                  paddingBottom: 10,
                }}>
                <TouchableOpacity style={{}}>
                  <Image
                    style={{
                      width: Dimensions.get('screen').width - 50,
                      height: 150,
                      resizeMode: 'contain',
                    }}
                    source={item?.item?.image}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: '700',
                    marginLeft: 10,
                  }}>
                  Rs:{item?.item?.price}
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: '700',
                    marginLeft: 10,
                    marginTop: 3,
                  }}>
                  {item?.item?.pname}
                </Text>
                <View
                  style={{
                    paddingHorizontal: 5,
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      resizeMode: 'contain',
                    }}
                    source={require('../../Images/delivery.png')}
                  />
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight: '700',
                      marginLeft: 10,
                      marginTop: 3,
                    }}>
                    Delivery Rs:{item?.item?.deliveryPrice}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      padding: 10,
                      width: 150,
                      alignSelf: 'center',
                      marginTop: 20,
                      backgroundColor: '#d44f46',
                      borderRadius: 20,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 18,
                        textAlign: 'center',
                      }}>
                      Details
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      padding: 10,
                      width: 150,
                      alignSelf: 'center',
                      marginTop: 20,
                      backgroundColor: '#d44f46',
                      borderRadius: 20,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 18,
                        textAlign: 'center',
                      }}>
                      Share
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}
