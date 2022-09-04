import { StyleSheet, Text, View , Image , TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import React from 'react'

const Header = () => {
  return (
    <View 
    style={{
        padding: 15,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingHorizontal: 10,

      }}
    >
          <Text style={{textAlign: 'center' , fontSize:18 , fontFamily: 'NanumMyeongjo-ExtraBold', color:"#d44f46"}}> Reseller App</Text>
          <View
          style={{
            flexDirection: 'row',

          }}>
          <TouchableOpacity>
            <Image
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                // borderRadius: 30,
                marginLeft: 30,
                tintColor: 'black',
              }}
              source={require('../assets/notification.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                // borderRadius: 30,
                tintColor: '#d44f46',
                marginLeft: 10,
              }}
              source={require('../assets/cart.png')}
            />
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})