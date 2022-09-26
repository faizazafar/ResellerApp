import {
    Text,
    StyleSheet,
    View,
    FlatList,
    Image,
    Dimensions,
    TouchableOpacity,
    Share,
  } from 'react-native';
  import React, {Component} from 'react';
  import {Rating, AirbnbRating} from 'react-native-ratings';
  import Modal from 'react-native-modal';
  import CheckboxCustom from '../../components/CheckboxCustom';
  var heading = 'Top Selling Product';

const ShareCatalog = () => {
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
  return (
    <View style={{flex: 1}}>
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
                fontSize: 12,
              }}>
              18-9-2022
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('AllItem', {
                Heading: heading,
              });
            }}>
            <Text
              style={{
                color: '#d81536',
                fontSize: 12,
                fontWeight: '600',
              }}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
        horizontal
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
                  marginHorizontal: 10,
                  backgroundColor: 'white',
                  borderRadius: 4,
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                  shadowColor: 'black',
                  shadowOffset: {
                    height: 0,
                    width: 0,
                  },
                  elevation: 4,
                  marginVertical: 20,
                }}>
                <View  style={{ flexDirection:"row", margin:5}}>
                  <Image
                    style={{
                      // margin:10,
                      width: Dimensions.get('screen').width - 250,
                      height: 150,
                      resizeMode: 'contain',
                    }}
                    source={item?.item?.image}
                  />
                  <Text style={{position:"absolute" , left:150 , top :50 , color:"black"
                , fontSize:25}}>+ 9</Text>
            

                     <Image
                    style={{
                      opacity:0.4,
                      backgroundColor:"grey",
                      width: Dimensions.get('screen').width - 250,
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
                      padding: 10,
                      // width: 150,
                      alignSelf: 'flex-start',
                    //   marginTop: 20,
                    }}>
                     <Rating
                     ratingBackgroundColor="white"
                     imageSize={12}
                     readonly={true}
                     startingValue={item?.item?.rating}
                     // onFinishRating={this.ratingCompleted}
                    //  style={{paddingVertical: 10, marginLeft: 10}}
                  />
                  </View>

                   <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      padding: 8,
                      width: 120,
                      alignSelf: 'center',
                      backgroundColor: '#d44f46',
                      borderRadius: 5,
                      marginRight:10
                      
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 12,
                        textAlign: 'center',
                      }}>
                      Share
                    </Text>
                  </TouchableOpacity>
                 
              </TouchableOpacity>
            );
          }}
        />
        {/* {this.state.visible == true ? (
          <Modal
            style={{justifyContent: 'flex-end'}}
            onBackdropPress={() => {
              this.setState({visible: !this.state.visible});
            }}
            isVisible={this.state.visible}>
            <View
              style={{
                alignSelf: 'center',
                flex: 0.25,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                width: Dimensions.get('screen').width,
                backgroundColor: 'white',
                justifyContent: 'center',
                padding: 20,
                overflow: 'hidden',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  borderWidth: 0.5,
                  padding: 10,
                  borderRadius: 10,
                }}>
                <CheckboxCustom
                  color={'#d81536'}
                  size={20}
                  status={this.state.ischeck1}
                  onPress={() => {
                    this.setState({ischeck1: !this.state.ischeck1});
                  }}
                />
                <Text style={{fontSize: 20, marginLeft: 10}}>
                  Share images only
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  borderWidth: 1,
                  padding: 10,
                  borderWidth: 0.5,
                  borderRadius: 10,
                }}>
                <CheckboxCustom
                  color={'#d81536'}
                  size={20}
                  status={this.state.ischeck2}
                  onPress={() => {
                    this.setState({ischeck2: !this.state.ischeck2});
                  }}
                />
                <Text style={{fontSize: 20, marginLeft: 10}}>
                  Share description and images
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  this.state.ischeck1
                    ? this.onShare(this.state.selected)
                    : null;
                }}
                style={{
                  padding: 20,
                  width: 150,
                  alignSelf: 'center',
                  marginTop: 20,
                  backgroundColor: '#d81536',
                  borderRadius: 20,
                }}>
                <Text
                  style={{color: 'white', fontSize: 18, textAlign: 'center'}}>
                  Share
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        ) : null} */}
      </View>
  )
}

export default ShareCatalog

const styles = StyleSheet.create({})