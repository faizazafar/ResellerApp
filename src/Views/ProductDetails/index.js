import { StyleSheet, Text, View , FlatList, ScrollView, Image, Dimensions
, Animated} from 'react-native'
import React, { useEffect  , useState} from 'react'
import Header from '../../components/Header'
import {getProduct} from '../../components/Products'

const ProductDetails = ({route}) => {
    const { productId } = route.params

    const [product, setProduct] = useState({});

  useEffect (() => {
    setProduct(getProduct(productId));
  }, []);

  console.log(product)

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
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
              marginTop: 32,
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
                      }}></Animated.View>
                  );
                })
              : null}
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
        </View> 
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.productName}</Text>
          <Text style={styles.price}>$ {product.price}</Text> 
          <Text style={styles.description}>{product.description}</Text> 
        </View> 



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
  });