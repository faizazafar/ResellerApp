import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Delivered = () => {
  return (
    <ScrollView>
    <View style={{flex:1 , alignItems:"center" 
, justifyContent:"center" }}>
      <Text>No items to show</Text>
    </View>
    </ScrollView>
  )
}

export default Delivered

const styles = StyleSheet.create({})