import { Image, StyleSheet, Text, View , KeyboardAvoidingView , Platform } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import TextInputClass from './TextInput'

const Search = () => {

    const [searchValue , setSearch] = useState('')
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
  >
    <View style={{ backgroundColor:'#fff', borderRadius:10 ,
    paddingHorizontal:'5%' , marginVertical:10 ,
    marginHorizontal:10,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 5,}}>

<TextInputClass
            image={require('../assets/search.png')}
            imageStyle={{
              width: 20,
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
              tintColor: '#9e9e9e',
            }}
            style={{
              padding: 1,
              paddingHorizontal: 10,
              // fontFamily: 'JuliusSansOne-Regular',
            }}
            placeholder={'Search'}
            onChange={t => {
              setSearch(t);
            }}
          />

     {/* <View style={{flexDirection:"row" , borderRadius:30 ,width:'100%', borderColor:"black",
    borderWidth:1 , alignItems:"center" , justifyContent:"flex-start" , paddingLeft:10}}>       
       <TextInputClass
        style={{
            padding: 2,
            // fontFamily: 'JuliusSansOne-Regular',
          }}
            placeholder={'Search'}
            onChange={t => {
              setSearch(t);
            }}/>
     </View> */}
    </View>
    </KeyboardAvoidingView>

  )
}

export default Search

const styles = StyleSheet.create({})