import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import TextInputClass from '../../components/TextInput'
import { SafeAreaView } from 'react-native-safe-area-context'
import RadioButtonRN from 'radio-buttons-react-native';

const New = () => {
    const data = [
        {
          label: 'data 1'
         },
         {
          label: 'data 2'
         }
        ];

    const [ username , setUsername] = useState('')
    const [ mobileNo , setMobieNo] = useState('')
    const [ secondmobileNo , setSecondMobieNo] = useState('')
    const [ apartmentName , setApartmentName] = useState('')
    const [ street , setStreet] = useState('')
    const [ block , setBlock] = useState('')
    const [ landMark , setLandmark] = useState('')


  return (
    <SafeAreaView style={{flex:1 ,}}>
    <ScrollView contentContainerStyle={{paddingBottom:80}}>
         <View
          style={{
            backgroundColor: '#fafafa',
            borderRadius: 3,
            borderWidth:0.5,
            borderColor:"#d44f46",
   width:"94%",
            marginVertical: 10,
          }}>
          <TextInputClass
           
            pass={true}
            style={{
              padding: 5,
              paddingHorizontal: 20,
        
            }}
            placeholder={'Enter customer name'}
            onChange={t => {
              setUsername(t);
            }}
          />

          
        </View>

        <View
          style={{
            backgroundColor: '#fafafa',
            borderRadius: 3,
            borderWidth:0.5,
            borderColor:"#d44f46",
   width:"94%",
            marginVertical: 10,
          }}>
          <TextInputClass
           
            pass={true}
            style={{
              padding: 5,
              paddingHorizontal: 20,
            }}
            placeholder={'Mobile No'}
            onChange={t => {
          setMobieNo(t);
            }}
          />

          
        </View>

        <View
          style={{
            backgroundColor: '#fafafa',
            borderRadius: 3,
            borderWidth:0.5,
            borderColor:"#d44f46",
            width:"94%",
            marginVertical: 10,
          }}>
          <TextInputClass
           
            pass={true}
            style={{
              padding: 5,
              paddingHorizontal: 20,
            }}
            placeholder={'Alternate Mobile No (Optional)'}
            onChange={t => {
              setSecondMobieNo(t);
            }}
          />

          
        </View>
      
        <View
          style={{
            backgroundColor: '#fafafa',
            borderRadius: 3,
            borderWidth:0.5,
            borderColor:"#d44f46",
   width:"94%",
            marginVertical: 10,
          }}>
          <TextInputClass
            pass={true}
            style={{
              padding: 5,
              paddingHorizontal: 20,
            }}
            placeholder={'House /Aparment  Mo'}
            onChange={t => {
              setApartmentName(t);
            }}
          />

          
        </View>

        <View
          style={{
            backgroundColor: '#fafafa',
            borderRadius: 3,
            borderWidth:0.5,
            borderColor:"#d44f46",
   width:"94%",
            marginVertical: 10,
          }}>
          <TextInputClass
            
            pass={true}
            style={{
              padding: 5,
              paddingHorizontal: 20,
            }}
            placeholder={'Nearest Landmark'}
            onChange={t => {
              setLandmark(t);
            }}
          />

          
        </View>

        <View
          style={{
            backgroundColor: '#fafafa',
            borderRadius: 3,
            borderWidth:0.5,
            borderColor:"#d44f46",
   width:"94%",
            marginVertical: 10,
          }}>
          <TextInputClass
            pass={true}
            style={{
              padding: 5,
              paddingHorizontal: 20,
            }}
            placeholder={'Block Name'}
            onChange={t => {
              setBlock(t);
            }}
          />

          
        </View>

        <View
          style={{
            backgroundColor: '#fafafa',
            borderRadius: 3,
            borderWidth:0.5,
            borderColor:"#d44f46",
   width:"94%",
            marginVertical: 10,
          }}>
          <TextInputClass
           
            pass={true}
            style={{
              padding: 5,
              paddingHorizontal: 20,
            }}
            placeholder={'Street / Road Name'}
            onChange={t => {
             setStreet(t);
            }}
          />

          
        </View>
        <TouchableOpacity
            onPress={() => {setShowModal(!showModal)
              console.log("jd")
            }}
            style={{
              padding: 15,
              backgroundColor: '#d44f46',
              borderRadius: 5,
              margin:20,
              marginBottom:20,
              justifyContent:"center",
              alignSelf:"center",
            //   marginTop: 20,
              width: '50%',
              marginLeft:16
            }}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'JuliusSansOne-Regular',
                color: 'white',
                textAlign: 'center',
              }}>
              NEXT
            </Text>
          </TouchableOpacity>
          <RadioButtonRN
  data={data}
  selectedBtn={(e) => console.log(e)}
/>
    </ScrollView>
    </SafeAreaView>
  )
}

export default New

const styles = StyleSheet.create({})