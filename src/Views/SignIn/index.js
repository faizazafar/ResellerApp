import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import TextInputClass from '../../components/TextInput';
import {useState} from 'react';
import CheckboxCustom from '../../components/CheckboxCustom';
import {ScrollView} from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

const SignIn = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  return (
    <ScrollView contentContainerStyle={{flex: 1, backgroundColor: '#d44f46'}}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome! </Text>
        <Text style={styles.text_subtite}> Log In Into Your Account </Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
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
              // fontFamily: 'JuliusSansOne-Regular',
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
            // justifyContent: 'center',
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
              padding: 5,
              paddingHorizontal: 20,
              // fontFamily: 'JuliusSansOne-Regular',
              // backgroundColor:"pink"
            }}
            placeholder={'Password'}
            onChange={t => {
              setPassword(t);
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: 2,
            marginVertical: 10,
          }}>
          <CheckboxCustom
            size={15}
            color={'#d44f46'}
            onPress={() => {
              setChecked(!checked);
            }}
            status={checked}
          />
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              marginLeft: 5,
              // marginTop:-3,
              fontFamily: 'JuliusSansOne-Regular',
            }}>
            Remember me
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '300',
                fontFamily: 'JuliusSansOne-Regular',
                color: 'black',
                marginLeft: 60,
                // marginTop: 30,
              }}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            padding: 18,
            backgroundColor: '#d44f46',
            borderRadius: 20,
            marginTop: 40,
          }}>
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
            fontSize: 15,
            fontFamily: 'JuliusSansOne-Regular',
            color: 'black',
            textAlign: 'center',
            marginVertical: 10,
          }}>
          Or
        </Text>

        <TouchableOpacity
        onPress={()=> props.navigation.navigate('SignUp')}
          style={{
            padding: 18,
            borderRadius: 20,
            borderColor: '#d44f46',
            borderWidth: 2,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'JuliusSansOne-Regular',
              color: 'black',
              textAlign: 'center',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'JuliusSansOne-Regular',
            color: 'black',
            textAlign: 'center',
            marginTop: 10,
          }}>
          Or continue with
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 30,
          }}>
          <TouchableOpacity
            style={{
              padding: 10,
              borderBottomColor: '#4267B2',
              borderWidth: 2,
              borderRadius: 20,
            }}>
            <Image
              style={{width: 40, height: 40, resizeMode: 'contain'}}
              source={require('../../Images/download.jpg')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              borderBottomColor: '#d44f46',
              borderWidth: 2,
              borderRadius: 20,
            }}>
            <Image
              style={{width: 40, height: 40, resizeMode: 'contain'}}
              source={require('../../Images/google.png')}
            />
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d44f46',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontFamily: 'JuliusSansOne-Regular',
    fontSize: 30,
  },
  text_subtite: {
    color: '#fff',
    fontFamily: 'JuliusSansOne-Regular',
    // fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginLeft:-5
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
