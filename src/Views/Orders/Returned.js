import { StyleSheet, Text, View , ScrollView} from 'react-native'
import React from 'react'

const Returned = () => {
  return (
    <ScrollView>
    <View style={{flex:1 , alignItems:"center" 
, justifyContent:"center" }}>
      <Text>No items to show</Text>
    </View>
    </ScrollView>
  )
}

export default Returned

const styles = StyleSheet.create({})