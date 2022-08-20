import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TextInputClass from '../../Components/TextInput';
import {useState} from 'react';
import CheckboxCustom from '../../Components/CheckboxCustom';

const SignUp = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'NanumMyeongjo-ExtraBold',
            fontSize: 50,
            color: 'black',
          }}>
          Create your Account
        </Text>
      </View>
      <View style={{marginTop: 30}}>
        <View
          style={{
            backgroundColor: '#fafafa',
            borderRadius: 20,
            justifyContent: 'center',
          }}>
          <TextInputClass
            image={require('../../assets/mail.png')}
            imageStyle={{
              width: 20,
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
              tintColor: '#9e9e9e',
            }}
            style={{
              padding: 5,
              paddingHorizontal: 20,
            }}
            placeholder={'Email'}
            onChange={t => {
              setEmail(t);
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#fafafa',
            borderRadius: 20,
            justifyContent: 'center',
            marginVertical: 10,
          }}>
          <TextInputClass
            image={require('../../assets/lock.png')}
            imageStyle={{
              width: 20,
              height: 20,
              justifyContent: 'center',
              alignSelf: 'center',
              tintColor: '#9e9e9e',
            }}
            pass={true}
            style={{
              padding: 10,
              paddingHorizontal: 20,
            }}
            placeholder={'Password'}
            onChange={t => {
              setPassword(t);
            }}
          />
        </View>
        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            marginVertical: 30,
          }}>
          <CheckboxCustom
            size={20}
            color={'#246bfd'}
            onPress={() => {
              setChecked(!checked);
            }}
            status={checked}
          />
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'JuliusSansOne-Regular',
              color: 'black',
              textAlign: 'center',
              marginLeft: 5,
            }}>
            Remember me
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{padding: 20, backgroundColor: '#d44f46', borderRadius: 30}}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'JuliusSansOne-Regular',
            color: 'white',
            textAlign: 'center',
          }}>
          Sign In
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'JuliusSansOne-Regular',
          color: 'black',
          textAlign: 'center',
          marginTop: 30,
        }}>
        Or continue with
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 30,
        }}>
        <TouchableOpacity>
          <Image
            style={{width: 30, height: 30, resizeMode: 'contain'}}
            source={require('../../Images/facebook.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{width: 40, height: 40, resizeMode: 'contain'}}
            source={require('../../Images/google.png')}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 14,
          fontFamily: 'JuliusSansOne-Regular',
          color: 'black',
          textAlign: 'center',
          marginTop: 30,
        }}>
        Already have an account?
        <Text
          onPress={() => {
            props.navigation.navigate('SignIn');
          }}
          style={{
            fontSize: 14,
            fontFamily: 'JuliusSansOne-Regular',
            color: 'blue',
            textAlign: 'center',
            marginTop: 30,
          }}>
          {' '}
          Sign in
        </Text>
      </Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
