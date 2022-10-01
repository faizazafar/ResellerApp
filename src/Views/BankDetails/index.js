import {
  Text,
  TouchableOpacity,
  View,
  Switch,
  Image,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import {Checkbox} from 'native-base';
export default class index extends Component {
  state = {
    selected: 'Add New Bank',
    selectedMethod: '',
    makePrimary: false,
  };

  renderTabSelector() {
    const {selected} = this.state;

    return (
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          onPress={() => this.setState({selected: 'Add New Bank'})}
          style={{
            borderBottomWidth: selected == 'Add New Bank' ? 2 : 0,
            borderBottomColor: selected == 'Add New Bank' ? 'green' : 'grey',
            flex: 0.45,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '800',
              color: selected == 'Add New Bank' ? 'green' : 'grey',
              paddingBottom: 10,
            }}>
            Add New Bank
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.setState({selected: 'My Bank Details'})}
          style={{
            flex: 0.46,
            borderBottomWidth: selected == 'My Bank Details' ? 2 : 0,
            borderBottomColor: selected == 'My Bank Details' ? 'green' : 'grey',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '800',
              color: selected == 'My Bank Details' ? 'green' : 'grey',
              paddingBottom: 10,
            }}>
            My Bank Details
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderBankselector() {
    const {selected, selectedMethod, makePrimary} = this.state;

    return (
      <View style={{flex: 1}}>
        {selected === 'Add New Bank' && (
          <View>
            <Text
              style={{
                padding: 20,
                fontSize: 18,
                fontWeight: '800',
                color: 'black',
              }}>
              Bank Select Karein
            </Text>
            <Text
              style={{
                paddingHorizontal: 20,
                fontSize: 18,
                color: 'black',
              }}>
              Profit haasil karnay kay liay bank details enter karein
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'row',
                marginTop: 20,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Checkbox
                  style={{borderRadius: 20}}
                  isChecked={selectedMethod === 'easypaisa' ? true : false}
                  onChange={() => this.setState({selectedMethod: 'easypaisa'})}
                  value="green"
                  colorScheme="green"
                  size="md"
                  defaultIsChecked></Checkbox>
                <Image
                  source={require('../../Images/easypaisa.png')}
                  style={{
                    width: 100,
                    height: 30,
                    marginLeft: 10,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Checkbox
                  style={{borderRadius: 20}}
                  isChecked={selectedMethod === 'jazzcash' ? true : false}
                  onChange={() => this.setState({selectedMethod: 'jazzcash'})}
                  value="green"
                  colorScheme="green"
                  size="md"
                  // icon={<Icon as={<MaterialCommunityIcons name="chess-knight" />} />}
                  defaultIsChecked></Checkbox>
                <Image
                  source={require('../../Images/jazzcash.png')}
                  style={{
                    width: 100,
                    height: 30,
                    marginLeft: 10,
                    resizeMode: 'contain',
                  }}
                />
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
                height: 50,
                backgroundColor: '#cdcdcd',
                marginTop: 30,
                borderRadius: 10,
              }}>
              <View>
                <Text>Profit Payment Time</Text>
              </View>
              <View>
                <Text style={{fontWeight: '800', color: 'black'}}>
                  2-3 days
                </Text>
                <Text style={{}}>After order delivery</Text>
              </View>
            </View>
            <View style={{}}>
              <Text
                style={{
                  padding: 20,
                  fontSize: 18,
                  fontWeight: '800',
                  color: 'black',
                }}>
                Easypaisa Account Number
              </Text>
              <TextInput
                placeholder="03XX-XXXXXX"
                style={{paddingLeft: 30, marginHorizontal: 20, borderWidth: 1}}
                placeholderTextColor={'grey'}
              />
              <View
                style={{
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  marginTop: 20,
                }}>
                <Checkbox
                  style={{}}
                  isChecked={makePrimary}
                  onChange={() => this.setState({makePrimary: !makePrimary})}
                  value="green"
                  colorScheme="green"
                  size="md"
                  // icon={<Icon as={<MaterialCommunityIcons name="chess-knight" />} />}
                  defaultIsChecked></Checkbox>
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 18,
                    fontWeight: '800',
                    color: 'green',
                  }}>
                  Make Primary
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  padding: 10,
                  marginTop: 20,
                  alignSelf: 'center',
                  backgroundColor: 'green',
                  width: 200,
                  borderRadius: 10,
                }}>
                <Text style={{color: 'white', textAlign: 'center'}}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {selected === 'My Bank Details' && (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontWeight: '800',
                paddingBottom: 10,
                color: 'black',
              }}>
              No Bank Details
            </Text>
          </View>
        )}
      </View>
    );
  }

  render() {
    const {selected, selectedMethod} = this.state;
    return (
      <View style={{flex: 1, marginTop: 30}}>
        <Text
          style={{
            padding: 20,
            fontSize: 18,
            fontWeight: '800',
            color: 'black',
          }}>
          Bank Details
        </Text>
        {this.renderTabSelector()}
        {this.renderBankselector()}
      </View>
    );
  }
}
