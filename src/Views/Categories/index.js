import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Rating } from 'react-native-ratings';
const Product = [
  {
    image: require('../../Images/dress1.jpg'),
    price: 555,
    pname: '1 PC Replica Collection Volume 1',
    subtitle: "Women 1 pc cotton dress",
    rating: '4',
    deliveryPrice: 99,
  },
  {
    image: require('../../Images/dress4.jpg'),
    price: 555,
    pname: 'Special Nike Shoes',
    subtitle: "Women 2 pc cotton dress",
    rating: '5',
    deliveryPrice: 99,
  },
  {
    image: require('../../Images/dress6.jpg'),
    price: 555,
    pname: 'Special Nike Shoes',
    subtitle: "Women 1 pc lawn dress",
    rating: '2',
    deliveryPrice: 99,
  },
  {
    image: require('../../Images/dress7.jpg'),
    price: 555,
    pname: 'Special Nike Shoes',
    subtitle: "Women 1 pc lawn dress",
    rating: '3.5',
    deliveryPrice: 99,
  },
  {
    image: require('../../Images/dress11.jpg'),
    price: 555,
    pname: 'Special Nike Shoes',
    subtitle: "Women 1 pc lawn dress",
    rating: '3',
    deliveryPrice: 99,
  },
  {
    image: require('../../Images/dress78.jpg'),
    price: 555,
    pname: 'Special Nike Shoes',
    subtitle: "Women 1 pc lawn dress",
    rating: '3',
    deliveryPrice: 99,
  },
  {
    image: require('../../Images/bed1.jpg'),
    price: 555,
    pname: 'Special Nike Shoes',
    subtitle: "Women 1 pc lawn dress",
    rating: '3',
    deliveryPrice: 99,
  },
  {
    image: require('../../Images/dress33.jpg'),
    price: 555,
    pname: 'Special Nike Shoes',
    subtitle: "Women 1 pc lawn dress",

    rating: '3',
    deliveryPrice: 99,
  },

  {
    image: require('../../Images/dress34.jpg'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '2',
    deliveryPrice: 99,
  },
  {
    image: require('../../Images/dress1.jpg'),
    price: 555,
    pname: 'Special Nike Shoes',
    rating: '4',
    deliveryPrice: 99,
  },
];
const Categories = () => {
  return (
    <View style={{flex:1, backgroundColor: 'white'}}>
      {/* <View
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
              Categories
            </Text>
          </TouchableOpacity>
        </View> */}
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
              <TouchableOpacity
                style={{
                  paddingBottom: 10,
                  marginHorizontal: 15,
                  backgroundColor: 'white',
                  borderRadius: 4,
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                  shadowColor: 'black',
                  shadowOffset: {
                    height: 0,
                    width: 0,
                  },
                  elevation: 8,
                  marginVertical: 20,
                }}>
                <View  style={{ flexDirection:"row", margin:5}}>
                  <Image
                    style={{
                      // margin:10,
                      width: Dimensions.get('screen').width - 200,
                      height: 150,
                      resizeMode: 'contain',
                    }}
                    source={item?.item?.image}
                  />
                  <Text style={{position:"absolute" , left:220 , top :50 , color:"black"
                , fontSize:25}}>+ 9</Text>
                {/* <ImageBackground
                
                style={{
                  margin:10,
                  opacity:0.5,
                  backgroundColor:"grey",
                  width: Dimensions.get('screen').width - 200,
                  height: 150,
                  resizeMode: 'contain',
                  
                }}
                source={item?.item?.image}

                >
                    <View style={ {position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
     <Text style={{ color:"black" , fontSize:30 , fontWeight:"400"}}>+10</Text>
   </View>
                  </ImageBackground> */}

                     <Image
                    style={{
                      // margin:10,
                      opacity:0.4,
                      backgroundColor:"grey",
                      width: Dimensions.get('screen').width - 200,
                      height: 150,
                      resizeMode: 'contain',
                    }}
                    source={item?.item?.image}
                  />
                </View>
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
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    marginLeft: 10,
                  }}>
                  {item?.item?.subtitle}
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    marginLeft: 10,
                    marginTop:4
                  }}>
                  {`Starting From Rs:${item?.item?.price}`}
                </Text>
                <View
                  style={{
                    paddingHorizontal: 10,
                    flexDirection: 'row',
                    marginTop:10
                  }}>
                    <TouchableOpacity>
                     <Image
                    style={{
                      width: 20,
                      height: 20,
                      resizeMode: 'contain',
                      tintColor:'#d44f46'
                    }}
                    source={require('../../assets/copy2.png')}
                  />
                                    </TouchableOpacity>

                  <Text
                    style={{
                      color: 'black',
                      fontSize: 14,
                      fontWeight: '500',
                      marginLeft: 10,
                      // marginTop: 3,
                    }}>
                    Copy Details
                  </Text>
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      resizeMode: 'contain',
                     marginLeft:70,
                     tintColor:'#d44f46'
                
                    }}
                    source={require('../../Images/delivery.png')}
                  />
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 14,
                      fontWeight: '500',
                      marginLeft: 10,
                    }}>
                    Delivery Rs:{item?.item?.deliveryPrice}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      padding: 10,
                      // width: 150,
                      alignSelf: 'center',
                      marginTop: 20,
                    }}>
                     <Rating
                     ratingBackgroundColor="white"
                     imageSize={20}
                     readonly={true}
                     startingValue={item?.item?.rating}
                     // onFinishRating={this.ratingCompleted}
                    //  style={{paddingVertical: 10, marginLeft: 10}}
                  />
                  </View>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      padding: 10,
                      width: 150,
                      alignSelf: 'center',
                      marginTop: 20,
                      backgroundColor: '#d44f46',
                      borderRadius: 5,
                      marginRight:10
                      
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
              </TouchableOpacity>
            );
          }}
        />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})