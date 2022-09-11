import { StyleSheet, Text, View , FlatList, ScrollView, Image, Dimensions , TouchableOpacity
, Animated} from 'react-native'
import React, { useEffect  , useState} from 'react'
import Header from '../../components/Header'
import {getProduct} from '../../components/Products'
import { Rating } from 'react-native-ratings'

const ProductDetails = ({route}) => {
    const { productId } = route.params

    const [product, setProduct] = useState({});

  useEffect (() => {
    setProduct(getProduct(productId));
  }, []);

  console.log(product)
  const star_unfill = '../../assets/star-unfill.png';


  const width = Dimensions.get('window').width
 const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  const renderProduct = ({item , index}) =>{

    return(

      <View style={{ width:width  ,height:240, alignItems:"center", justifyContent:"center" }}>
        <Image
        source={item}
        style={{
          width:'100%',
          height: '100%',
          resizeMode:"contain"
        }}
        />
      </View>
    )
  }

  return (
    <ScrollView
    contentContainerStyle={{
      flexGrow: 1,
      backgroundColor: 'white',
      paddingBottom: 30,
    }}>
              <Header />

<FlatList
data={product?.productImageList} horizontal={true} 
showsHorizontalScrollIndicator={false} decelerationRate={0.8} snapToInterval={width} bounces={false}
renderItem={renderProduct}  onScroll={Animated.event(
  [{nativeEvent: {contentOffset: {x: scrollX}}}],
  {useNativeDriver: false}
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
          <View style={{flexDirection:'row',
        justifyContent:"space-between"}}>
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

          <View style={{flexDirection:"row" , justifyContent:"space-between"}}>
          <Text>Reviews</Text>
          <Rating starContainerStyle={{ justifyContent:"space-between"}}	
  ratingCount={5}
  imageSize={20}
  startingValue={0}
/>
          </View>

          <View style={{flexDirection:"row" , width:"100%" }}>
            {/* <View style={{justifyContent:""}}> */}
            <TouchableOpacity style={{marginRight:10}}>
         <Image source={require('../../assets/copy2.png')}  tintColor={'black'}
         style={{ width:20 , height:20  }}/>


         </TouchableOpacity>
         <Text>jsbxj</Text>

         {/* </View> */}
         
         <TouchableOpacity  >
         <Image source={require('../../assets/down2.png')}  tintColor={'black'}
         style={{ width:20 , height:20 , left:200 }}/>
         </TouchableOpacity>

         <Text style={{left:210}}>jsbxj</Text>

          </View>

          <View style={styles.verticleLine}></View>

          <Text>Delivery</Text>

          <Text>Product will be delivered in 2 -3 days</Text>


          <View style={styles.verticleLineTwo}></View>

          <Text>Details</Text>

          {product?.details && product?.details.map((e)=>{ return <Text>{e}</Text> })}
          <Text>{`${product.size}\n`}</Text>

          <Text>{product.note}</Text>

          <Text>{`Product Code : ${product.productCode}`}</Text>

          <View style={styles.verticleLineTwo}></View>
<Text>Refund Policy</Text>

<Text>7 Days Return</Text>
<Text>Warranty not available</Text>

<View style={{flexDirection:"row" , justifyContent:"space-evenly", flex:1}}>

<TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: '#d44f46',
            borderRadius: 5,
            marginTop: 40,
            width:'45%',
          
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
            width:'45%'

          
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

{/* 
         <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.productName}</Text>
          <Text style={styles.price}>$ {product.price}</Text> 
          <Text style={styles.description}>{product.description}</Text> 
        </View> 

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.productName}</Text>
          <Text style={styles.price}>$ {product.price}</Text> 
          <Text style={styles.description}>{product.description}</Text> 
        </View> 
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.productName}</Text>
          <Text style={styles.price}>$ {product.price}</Text> 
          <Text style={styles.description}>{product.description}</Text> 
        </View>   */}



    </ScrollView>
  )
}

export default ProductDetails

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
      width: '100%'
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
      height:3,
      width: '100%',
      backgroundColor: '#D3D3D3',
      marginTop: 3,
    },

    verticleLineTwo: {
      // height: '90%',
      height:1,
      width: '100%',
      backgroundColor: '#D3D3D3',
      marginTop: 3,
    }
  });