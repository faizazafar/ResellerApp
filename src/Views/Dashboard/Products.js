import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Share,
} from 'react-native';
import React, {Component} from 'react';
import {Rating, AirbnbRating} from 'react-native-ratings';
import Modal from 'react-native-modal';
import CheckboxCustom from '../../components/CheckboxCustom';
import RNFetchBlob from 'rn-fetch-blob';
const fs = RNFetchBlob.fs;
var heading = 'Replica Mania';
export default class Products extends Component {
  state = {visible: false, ischeck1: false, ischeck2: false, selected: null};
  onShare = async item => {
    // return;
    // return;
    try {
      let imagePath = null;
      RNFetchBlob.config({
        fileCache: true,
      })
        .fetch('get', String(item?.image))
        // the image is now dowloaded to device's storage
        .then(resp => {
          // the image path you can use it directly with Image component
          imagePath = resp.path();
          // console.log('Image PATh', imagePath);
          return resp.readFile('base64');
        })
        .then(base64Data => {
          // here's base64 encoded image
          console.log('BASE URIdafsdfds', base64Data);
          // remove the file from storage
          return fs.unlink(imagePath);
        });
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };
  render() {
    const {item, navigation} = this.props;
    return (
      <View style={{flex: 1, marginTop: 20}}>
        <View
          style={{
            justifyContent: 'space-between',
            marginTop: 20,
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '800',
              }}>
              {heading}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('AllItem', {
                Heading: heading,
              });
            }}
            
            
            >
            <Text
              style={{
                color: '#d81536',
                fontSize: 16,
                fontWeight: '600',
              }}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
        horizontal
        scrollEnabled={false}
          data={item.slice(0,2)}
          contentContainerStyle={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 30,
          }}
          style={{flex: 1}}
          renderItem={(item, index) => {
            return (
              <View
                style={{
                    // elevation: 3,
                  margin: 5,
                  borderRadius: 3,
                  borderWidth: 0.1,
                  
                }}>
                <TouchableOpacity      onPress={() => {
              this.props.navigation.navigate('AllItem', {
                Heading: heading,
              });
            }}
             style={{}}>
                  <Image
                    style={{
                      width: 170,
                      height: 150,
                      resizeMode: 'contain',
                      
                    }}
                    source={item?.item?.image}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: '700',
                    marginLeft: 10,
                  }}>
                  Rs:{item?.item?.price}
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: '700',
                    marginLeft: 10,
                    marginTop: 3,
                  }}>
                  {item?.item?.pname}
                </Text>
                <View
                  style={{
                    paddingHorizontal: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight: '700',
                      marginTop: 3,
                    }}>
                    {item?.item?.rating}
                  </Text>
                  <Rating
                    ratingBackgroundColor="white"
                    imageSize={10}
                    readonly
                    startingValue={4}
                    // onFinishRating={this.ratingCompleted}
                    style={{paddingVertical: 10, marginLeft: 10}}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({visible: !this.state.visible});
                      this.setState({selected: item});
                    }}>
                    <Image
                      style={{
                        tintColor: '#d81536',
                        width: 20,
                        height: 20,
                        resizeMode: 'contain',
                      }}
                      source={require('../../Images/share.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}></FlatList>
        {this.state.visible == true ? (
          <Modal
            style={{justifyContent: 'flex-end'}}
            onBackdropPress={() => {
              this.setState({visible: !this.state.visible});
            }}
            isVisible={this.state.visible}>
            <View
              style={{
                alignSelf: 'center',
                flex: 0.25,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                width: Dimensions.get('screen').width,
                backgroundColor: 'white',
                justifyContent: 'center',
                padding: 20,
                overflow: 'hidden',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  borderWidth: 0.5,
                  padding: 10,
                  borderRadius: 10,
                }}>
                <CheckboxCustom
                  color={'#d81536'}
                  size={20}
                  status={this.state.ischeck1}
                  onPress={() => {
                    this.setState({ischeck1: !this.state.ischeck1});
                  }}
                />
                <Text style={{fontSize: 20, marginLeft: 10}}>
                  Share images only
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  borderWidth: 1,
                  padding: 10,
                  borderWidth: 0.5,
                  borderRadius: 10,
                }}>
                <CheckboxCustom
                  color={'#d81536'}
                  size={20}
                  status={this.state.ischeck2}
                  onPress={() => {
                    this.setState({ischeck2: !this.state.ischeck2});
                  }}
                />
                <Text style={{fontSize: 20, marginLeft: 10}}>
                  Share description and images
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  this.state.ischeck1
                    ? this.onShare(this.state.selected)
                    : null;
                }}
                style={{
                  padding: 20,
                  width: 150,
                  alignSelf: 'center',
                  marginTop: 20,
                  backgroundColor: '#d81536',
                  borderRadius: 20,
                }}>
                <Text
                  style={{color: 'white', fontSize: 18, textAlign: 'center'}}>
                  Share
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        ) : null}
      </View>
    );
  }
}
