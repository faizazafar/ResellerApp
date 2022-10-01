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
    selected: 'Pending',
    selectedMethod: '',
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
          onPress={() => this.setState({selected: 'Pending'})}
          style={{
            borderBottomWidth: selected == 'Pending' ? 2 : 0,
            borderBottomColor: selected == 'Pending' ? 'green' : 'grey',
            flex: 0.45,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '800',
              color: selected == 'Pending' ? 'green' : 'grey',
              paddingBottom: 10,
            }}>
            Pending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.setState({selected: 'Paid'})}
          style={{
            flex: 0.46,
            borderBottomWidth: selected == 'Paid' ? 2 : 0,
            borderBottomColor: selected == 'Paid' ? 'green' : 'grey',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: '800',
              color: selected == 'Paid' ? 'green' : 'grey',
              paddingBottom: 10,
            }}>
            Paid
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderPaymentselector() {
    const {selected, selectedMethod} = this.state;

    return (
      <View style={{flex: 1}}>
        {selected === 'Add New Bank' && (
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
              No Payment to show
            </Text>
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
              No Payment to show
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
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '800',
            color: 'black',
            backgroundColor: '#cdcdcd',
          }}>
          Aap Kay order ka profit Delivery mukammal honay k 3-4 din baad aap ko
          mosoool hoga
        </Text>
        {this.renderTabSelector()}
        {this.renderPaymentselector()}
      </View>
    );
  }
}
