import React, {Component, useState} from 'react';
import {
  Text,
  View,
  LayoutAnimation,
  UIManager,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const FAQ = ({item, index, selected, setSelected}) => {
  const show = index === selected;
  const [Qno, setQues] = useState();

  return (
    <View>
      <TouchableOpacity
        style={{
          marginTop: 10,
          //   backgroundColor: '#90BC60',
          //   justifyContent: 'center',
          borderBottomWidth: 0.3,
          height: 30,
          marginVertical: 5,
        }}
        onPress={() => {
          LayoutAnimation.linear();
          setSelected(index);
        }}>
        <Text
          style={{
            color: 'black',
            // fontWeight: 'bold',
            // textAlign: 'center',
          }}>
          Q{index + 1} {item.text}
        </Text>
      </TouchableOpacity>
      {show && (
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            marginBottom: 20,
          }}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            {item?.answer1}
          </Text>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            {item?.answer2}
          </Text>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            {item?.answer3}
          </Text>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            {item?.answer4}
          </Text>
        </View>
      )}
    </View>
  );
};

export default FAQ;
