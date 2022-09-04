import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import React, {useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Card = ({mainTitle , items }) => {

  const navigation = useNavigation()

  console.log(items)

    const [defaultrating, setDefaultRating] = useState(0);
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
    const star_fill = '../assets/star_filled.png';
    const star_unfill = '../assets/star-unfill.png';

    

    const CustomRatingBar = () => {
        return (
          <View style={styles.customRatingStyle}>
            {maxRating.map((item, key) => {
              return (
                <>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    key={item}
                    onPress={() => setDefaultRating(item)}>
                    <Image
                      style={styles.starIMG}
                      source={
                        item <= defaultrating
                          ? require(star_fill)
                          : require(star_unfill)
                      }></Image>
                  </TouchableOpacity>
                </>
              );
            })}
          </View>
        );
      };
  return (
    <View>
    <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      // paddingHorizontal: 15,
    }}>
    <Text style={{fontWeight:"bold" , fontSize:15}}> {mainTitle}</Text>
    <TouchableOpacity>
      <Text style={{fontWeight:"bold" , fontSize:15 , color:'#d44f46'}}> View All</Text>
    </TouchableOpacity>
  </View>

  <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingHorizontal: 6,
        }}>

        {
          items?.map((val , index)=>{

            return(
              <TouchableOpacity style={styles.card} onPress={() => {
                navigation.navigate('ProductDetails', {
                  productId : val.id,
                });
              }}>
              <View style={{padding: 8}}>
                <Image
                  style={styles.thumb}
                  source={val.image}
                />
              </View>
              <View style={styles.infoContainer}>
              <Text style={styles.price}>{`Rs ${val.price}`}</Text>
    
              <Text style={styles.name}>{val.productName}</Text>
                <View
                  style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 12}}>
                    {defaultrating + '/' + maxRating.length}
                  </Text>
    
                  <CustomRatingBar />
                  <TouchableOpacity>
                    <Image
                      source={require('../assets/shares.png')}
                      style={{width: 20, height: 20, tintColor: '#d44f46'}}></Image>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>

            )

          })
        }
      </View>


  </View>
  
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
      marginHorizontal: 15,
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
      height: 150,
      width: 150,
  
      // borderTopLeftRadius: 16,
      // borderTopRightRadius: 16,
      // width: '100%',
    },
    infoContainer: {
      padding: 16,
    },
    name: {
      fontSize: 14,
      fontWeight: '500',
      marginBottom: 8,
    },
    price: {
      fontSize: 14,
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
  });