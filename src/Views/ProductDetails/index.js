import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import {getProduct} from '../../components/Products';
import {Rating} from 'react-native-ratings';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';
import TextInputClass from '../../components/TextInput';

const ProductDetails = ({route}) => {
  const {productId} = route.params;
  const [open, setOpen] = useState(false);
  const [profitValue, setProfitValue] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const [product, setProduct] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setProduct(getProduct(productId));
  }, []);

  console.log(productId);
  const star_unfill = '../../assets/star-unfill.png';

  const width = Dimensions.get('window').width;
  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  const renderProduct = ({item, index}) => {
    return (
      <View
        style={{
          width: width,
          height: 240,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  };

  console.log('DETAILS', product?.productImageList, productId);
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: 'white',
        paddingBottom: 90,
      }}>
      <Header />

      <FlatList
        data={product?.productImageList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        snapToInterval={width}
        bounces={false}
        renderItem={renderProduct}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
      />
      <View
        style={{
          // width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 16,
          // marginTop: 32,
        }}>
        {product.productImageList
          ? product.productImageList.map((data, index) => {
              let opacity = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [0.2, 1, 0.2],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={index}
                  style={{
                    width: '16%',
                    height: 2.4,
                    backgroundColor: 'black',
                    opacity,
                    marginHorizontal: 4,
                    borderRadius: 100,
                    // bottom:310
                  }}></Animated.View>
              );
            })
          : null}
      </View>
      <View style={styles.infoContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.price}>$ {product.price}</Text>
          <TouchableOpacity>
            <Image
              source={require('../../assets/shares.png')}
              style={{width: 20, height: 20, tintColor: '#d44f46'}}></Image>
          </TouchableOpacity>
          {/* <Text style={styles.name}>{product.productName}</Text> */}
        </View>
        <Text style={styles.name}>{product.productName}</Text>
        <Text style={styles.name}>{product.subTitle}</Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Reviews</Text>
          <Rating
            starContainerStyle={{justifyContent: 'space-between'}}
            ratingCount={5}
            imageSize={20}
            startingValue={0}
          />
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
          {/* <View style={{justifyContent:""}}> */}
          <TouchableOpacity style={{marginRight: 10}}>
            <Image
              source={require('../../assets/copy2.png')}
              tintColor={'black'}
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
          <Text>jsbxj</Text>

          {/* </View> */}

          <TouchableOpacity>
            <Image
              source={require('../../assets/down2.png')}
              tintColor={'black'}
              style={{width: 20, height: 20, left: 200}}
            />
          </TouchableOpacity>

          <Text style={{left: 210}}>jsbxj</Text>
        </View>

        <View style={styles.verticleLine}></View>

        <Text>Delivery</Text>

        <Text>Product will be delivered in 2 -3 days</Text>

        <View style={styles.verticleLineTwo}></View>

        <Text>Details</Text>

        {product?.details &&
          product?.details.map(e => {
            return <Text>{e}</Text>;
          })}
        <Text>{`${product.size}\n`}</Text>

        <Text>{product.note}</Text>

        <Text>{`Product Code : ${product.productCode}`}</Text>

        <View style={styles.verticleLineTwo}></View>
        <Text>Refund Policy</Text>

        <Text>7 Days Return</Text>
        <Text>Warranty not available</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flex: 1,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            // width: '100%',
            // marginTop:50
          }}>
          <TouchableOpacity
            onPress={() => setShowModal(true)}
            style={{
              padding: 10,
              backgroundColor: '#d44f46',
              borderRadius: 5,
              marginTop: 40,
              width: '45%',
            }}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'JuliusSansOne-Regular',
                color: 'white',
                textAlign: 'center',
              }}>
              Order Now
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: '#d44f46',
              borderRadius: 5,
              marginTop: 40,
              width: '45%',
            }}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'JuliusSansOne-Regular',
                color: 'white',
                textAlign: 'center',
              }}>
              Add to Bag
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {console.log(showModal)}
      {showModal ? (
        <Modal
          onBackdropPress={() => setShowModal(!showModal)}
          isVisible={showModal}
          style={{justifyContent: 'flex-end', margin: 0}}>
          <View
            style={{
              alignSelf: 'center',
              flex: 0.5,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              width: Dimensions.get('screen').width,
              backgroundColor: 'white',
              justifyContent: 'center',
              padding: 20,
              overflow: 'hidden',
            }}>
            <View style={{flex: 1}}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginBottom: 10,
                }}>
                <Text>Size</Text>
                <Text style={{marginRight: 50}}>Quantity</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <DropDownPicker
                  containerStyle={{width: '50%', opacity: 0.5}}
                  // style={{ width:'50%'}}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                />

                <TouchableOpacity
                  style={{
                    borderRadius: 4,
                    padding: 12,
                    borderWidth: 1,
                    backgroundColor: '#dc3439',
                  }}>
                  <Image
                    tintColor={'white'}
                    source={require('../../Images/minus.png')}
                    style={{width: 15, height: 15}}
                  />
                </TouchableOpacity>
                <Text>1</Text>

                <TouchableOpacity
                  style={{
                    borderRadius: 4,
                    padding: 12,
                    borderWidth: 1,
                    backgroundColor: '#dc3439',
                  }}>
                  <Image
                    tintColor={'white'}
                    source={require('../../Images/plus.png')}
                    style={{width: 15, height: 15}}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  // backgroundColor: '#fafafa',
                  borderWidth: 1,
                  borderRadius: 10,
                  opacity: 0.5,
                  // justifyContent: 'center',
                  marginVertical: 10,
                }}>
                <TextInputClass
                  image={require('../../Images/profit.png')}
                  imageStyle={{
                    width: 20,
                    height: 20,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    tintColor: 'black',
                  }}
                  pass={false}
                  style={{
                    padding: 2,
                    paddingHorizontal: 10,
                    // fontFamily: 'JuliusSansOne-Regular',
                    // backgroundColor:"pink"
                  }}
                  placeholder={'Enter Profit'}
                  onChange={t => {
                    setProfitValue(t);
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
      ) : null}
    </ScrollView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
  verticleLine: {
    // height: '90%',
    height: 3,
    width: '100%',
    backgroundColor: '#D3D3D3',
    marginTop: 3,
  },

  verticleLineTwo: {
    // height: '90%',
    height: 1,
    width: '100%',
    backgroundColor: '#D3D3D3',
    marginTop: 3,
  },
});
