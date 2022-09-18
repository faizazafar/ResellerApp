import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Orders from '../Views/Orders';
import Profile from '../Views/Profile';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Drawers = createDrawerNavigator();
const categories = [
  {
    id: 1,
    image: require('../Images/dress1.jpg'),
    title: '3 piece original',
  },
  {
    id: 2,
    image: require('../Images/dress7.jpg'),
    title: '3 piece replica',
  },
  {
    id: 3,
    image: require('../Images/dress4.jpg'),
    title: '2 piece original',
  },

  {
    id: 4,
    image: require('../Images/dress33.jpg'),
    title: '1 piece original',
  },
  {
    id: 5,
    image: require('../Images/dress34.jpg'),
    title: '2 piece original',
  },
  {
    id: 6,
    image: require('../Images/dress1.jpg'),
    title: '2 piece replica',
  },
  {
    id: 7,
    image: require('../Images/dress9.jpg'),
    title: '3 piece original',
  },
  {
    id: 8,
    image: require('../Images/dress78.jpg'),
    title: '3 piece replica',
  },
  {
    id: 9,
    image: require('../Images/dress6.jpg'),
    title: '2 piece original',
  },

  {
    id: 10,
    image: require('../Images/dress11.jpg'),
    title: '1 piece original',
  },
  {
    id: 11,
    image: require('../Images/dress44.jpg'),
    title: '2 piece original',
  },
  {
    id: 12,
    image: require('../Images/dress1.jpg'),
    title: '2 piece replica',
  },
  {
    id: 13,
    image: require('../Images/bed1.jpg'),
    title: 'single bedsheet',
  },
  {
    id: 14,
    image: require('../Images/bed2.jpg'),
    title: 'double bedsheet',
  },
  {
    id: 15,
    image: require('../Images/bed3.jpg'),
    title: 'single double\nbedsheet',
  },
];

const CustomDrawer = ({navigation}) => {
  const [categoryOne, setCategoryOne] = useState(true);
  const [categoryTwo, setCategoryTwo] = useState(false);
  const [categoryTwoThree, setCategoryThree] = useState(false);

  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <DrawerContentScrollView
        style={{backgroundColor: '#f0f0f0'}}
        width={'40%'}
        color="black">
        <DrawerItem
          focused={categoryOne ? true : false}
          activeTintColor="#d44f46"
          onPress={() => {
            setCategoryOne(true);
            setCategoryTwo(false);
            setCategoryThree(false);
          }}
          // pressColor="#d44f46"
          width={'80%'}
          label=""
          icon={({color, size}) => (
            <Image
              style={{
                tintColor: '#d44f46',
                marginLeft: 10,
                width: 40,
                height: 40,
                resizeMode: 'contain',
              }}
              source={require('../Images/womenun.png')}></Image>
          )}
        />

        <Text style={{textAlign: 'center'}}>Women's Unstiched </Text>
        <DrawerItem
          focused={categoryTwo ? true : false}
          onPress={() => {
            setCategoryOne(false);
            setCategoryTwo(true);
            setCategoryThree(false);
          }}
          activeTintColor="#d44f46"
          width={'80%'}
          label=""
          icon={({color, size}) => (
            <Image
              style={{
                marginLeft: 10,
                tintColor: '#d44f46',
                width: 40,
                height: 40,
                resizeMode: 'contain',
              }}
              source={require('../Images/womenst.png')}></Image>
          )}
        />
        <Text style={{textAlign: 'center'}}>Women's Stiched </Text>

        <DrawerItem
          onPress={() => {
            setCategoryOne(false);
            setCategoryTwo(false);
            setCategoryThree(true);
          }}
          focused={categoryTwoThree ? true : false}
          activeTintColor="#d44f46"
          width={'80%'}
          label=""
          icon={({color, size}) => (
            <Image
              style={{
                marginLeft: 10,
                tintColor: '#d44f46',
                width: 40,
                height: 40,
                resizeMode: 'contain',
              }}
              source={require('../Images/bed.png')}></Image>
          )}
        />
        <Text style={{textAlign: 'center'}}>Bedding </Text>

        <DrawerItem
          onPress={() => {
            console.log('jhg');
            setCategoryOne(false);
            setCategoryTwo(false);
            setCategoryThree(false);
          }}
          pressColor="#d44f46"
          width={'80%'}
          label=""
          icon={({color, size}) => (
            <Image
              style={{
                marginLeft: 10,
                tintColor: '#d44f46',
                width: 40,
                height: 40,
                resizeMode: 'contain',
              }}
              source={require('../Images/menst.png')}></Image>
          )}
        />
        <Text style={{textAlign: 'center'}}>Men Stitched </Text>

        <DrawerItem
          onPress={() => {
            console.log('g');
            setCategoryOne(false);
            setCategoryTwo(true);
          }}
          pressColor="#d44f46"
          width={'80%'}
          label=""
          icon={({color, size}) => (
            <Image
              style={{
                marginLeft: 10,
                tintColor: '#d44f46',
                width: 40,
                height: 40,
                resizeMode: 'contain',
              }}
              source={require('../Images/menunst.png')}></Image>
          )}
        />

        <Text style={{textAlign: 'center'}}>Men UnStitched </Text>

        <DrawerItem
          //  focused={ categoryOne ? true : false}
          activeTintColor="#d44f46"
          onPress={() => {
            setCategoryOne(true);
            setCategoryTwo(false);
            setCategoryThree(false);
          }}
          // pressColor="#d44f46"
          width={'80%'}
          label=""
          icon={({color, size}) => (
            <Image
              style={{
                tintColor: '#d44f46',
                marginLeft: 10,
                width: 40,
                height: 40,
                resizeMode: 'contain',
              }}
              source={require('../Images/gads.png')}></Image>
          )}
        />

        <Text style={{textAlign: 'center'}}>Gadgets </Text>

        <DrawerItem
          //  focused={ categoryOne ? true : false}
          activeTintColor="#d44f46"
          onPress={() => {
            setCategoryOne(true);
            setCategoryTwo(false);
            setCategoryThree(false);
          }}
          // pressColor="#d44f46"
          width={'80%'}
          label=""
          icon={({color, size}) => (
            <Image
              style={{
                tintColor: '#d44f46',
                marginLeft: 10,
                width: 40,
                height: 40,
                resizeMode: 'contain',
              }}
              source={require('../Images/bags.png')}></Image>
          )}
        />

        <Text style={{textAlign: 'center'}}>Bags </Text>

        <DrawerItem
          //  focused={ categoryOne ? true : false}
          activeTintColor="#d44f46"
          onPress={() => {
            setCategoryOne(true);
            setCategoryTwo(false);
            setCategoryThree(false);
          }}
          // pressColor="#d44f46"
          width={'80%'}
          label=""
          icon={({color, size}) => (
            <Image
              style={{
                tintColor: '#d44f46',
                marginLeft: 10,
                width: 40,
                height: 40,
                resizeMode: 'contain',
              }}
              source={require('../Images/jewell.png')}></Image>
          )}
        />

        <Text style={{textAlign: 'center'}}>Jewellery </Text>

        <DrawerItem
          //  focused={ categoryOne ? true : false}
          activeTintColor="#d44f46"
          onPress={() => {
            setCategoryOne(true);
            setCategoryTwo(false);
            setCategoryThree(false);
          }}
          // pressColor="#d44f46"
          width={'80%'}
          label=""
          icon={({color, size}) => (
            <Image
              style={{
                tintColor: '#d44f46',
                marginLeft: 10,
                width: 40,
                height: 40,
                resizeMode: 'contain',
              }}
              source={require('../Images/cos.png')}></Image>
          )}
        />

        <Text style={{textAlign: 'center'}}>Cosmetics </Text>
      </DrawerContentScrollView>
      <View>
        {
          <View>
            <FlatList
              numColumns={3}
              contentContainerStyle={{}}
              // style={{flex:1 }}
              data={
                categoryOne
                  ? categories.slice(0, 6)
                  : categoryTwo
                  ? categories.slice(7, 11)
                  : categoryTwoThree
                  ? categories.slice(12, 15)
                  : null
              }
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity 
                  onPress={()=>{navigation.navigate('Categories')
                  navigation.closeDrawer()}}
                    style={{
                      marginVertical: 10,
                      justifyContent: 'space-between',
                      marginHorizontal: 4,
                    }}>
                    <Image
                      style={{width: 80, height: 80, resizeMode: 'contain'}}
                      source={item?.image}></Image>
                    <Text style={{fontSize: 10, textAlign: 'center'}}>
                      {item?.title}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        }
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
