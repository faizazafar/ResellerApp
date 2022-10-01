import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  ScrollView,
} from 'react-native';
import FAQ from '../FAQ/faq';
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const FaqData = [
  {
    id: 1,
    text: 'What is Reselling on Reseller?',
    answer1:
      '1. ' + 'A heritable change in the sensitivity of a pest population',
    answer2:
      '2. ' +
      'Reflected in the repeated failure of a product to achieve the expected level of controlwhen used according to label recommendation for that pest species',
  },
  {
    id: 2,
    text: 'How will I get my first order?',
    answer1:
      '1. ' +
      'Farmers Practice - Repeated use of insecticide with same killing action (MoA)for successive generations of the pest',
    answer2:
      '2. ' +
      ' Insects Ability - In a population of pests, there are genes for resistance to insecticide.',
  },
  {
    id: 3,
    text: 'How',
    answer1:
      '1 .' + 'Alternate the different mode of action within a fruiting season',
    answer2:
      '2 .' +
      'Avoid tank mixing of insecticides with different modes of action as much aspossible',
    answer3:
      '3 .' +
      'IPM Apply insecticides only when necessary.Time insecticide application at the vulnerable stage of the insect. Choose insecticide registered for the specific crop. Select insecticide that has low toxicity to natural enemies. Use the recommended rate.',
  },
  {
    id: 4,
    text: 'What is Reselling',
    answer1:
      '1 .' +
      'Understanding the insect pest Know the life cycle of the pest and its population dynamics. Identify the stage of fruit development when the pest is attacking. Examples of major insect pest throughout the country are: Cecid fly, mango leafhopper, mango thrips, and mango seed borer. (See: Mango Pests) 2. Understanding the Insecticide Know what insecticides are registered for the pest. (See: Mango Pesticides)',
    answer2:
      '2 .' +
      'Understanding the Insecticide Know what insecticides are registered for the pest. (See: Mango Pesticides) Educate yourself about important teminologies surrounding your insecticide.',
    answer3:
      '3 .' +
      'Evaluate Your Insecticide Practices Take note of the MoA of the insecticides that you used previously. Using the MoA of insecticides used, you can identify whether there might be resistance buildup happening. Refering to the colors can greatly speed up identification of MoA. Resistance may occur if there is a dominance of specific MoA color or incorrect dosage of chemical.',
    answer4:
      '4 .' +
      'Plan Ahead Make a list of insecticides with alternating MoA that you will use in the next cropping season. Make sure to use registered mango insecticides Pay attention to the proper dosages and PHI of the chemicals to be used',
  },
  {
    id: 3,
    text: 'How do I earn with Reseller',
    answer1:
      '1 .' + 'Alternate the different mode of action within a fruiting season',
    answer2:
      '2 .' +
      'Avoid tank mixing of insecticides with different modes of action as much aspossible',
    answer3:
      '3 .' +
      'IPM Apply insecticides only when necessary.Time insecticide application at the vulnerable stage of the insect. Choose insecticide registered for the specific crop. Select insecticide that has low toxicity to natural enemies. Use the recommended rate.',
  },
  {
    id: 2,
    text: 'How do I share products',
    answer1:
      '1. ' +
      'Farmers Practice - Repeated use of insecticide with same killing action (MoA)for successive generations of the pest',
    answer2:
      '2. ' +
      ' Insects Ability - In a population of pests, there are genes for resistance to insecticide.',
  },
  {
    id: 1,
    text: 'What is IRM?',
    answer1:
      '1. ' + 'A heritable change in the sensitivity of a pest population',
    answer2:
      '2. ' +
      'Reflected in the repeated failure of a product to achieve the expected level of controlwhen used according to label recommendation for that pest species',
  },
  {
    id: 4,
    text: 'How to contact us?',
    answer1:
      '1 .' +
      'Understanding the insect pest Know the life cycle of the pest and its population dynamics. Identify the stage of fruit development when the pest is attacking. Examples of major insect pest throughout the country are: Cecid fly, mango leafhopper, mango thrips, and mango seed borer. (See: Mango Pests) 2. Understanding the Insecticide Know what insecticides are registered for the pest. (See: Mango Pesticides)',
    answer2:
      '2 .' +
      'Understanding the Insecticide Know what insecticides are registered for the pest. (See: Mango Pesticides) Educate yourself about important teminologies surrounding your insecticide.',
    answer3:
      '3 .' +
      'Evaluate Your Insecticide Practices Take note of the MoA of the insecticides that you used previously. Using the MoA of insecticides used, you can identify whether there might be resistance buildup happening. Refering to the colors can greatly speed up identification of MoA. Resistance may occur if there is a dominance of specific MoA color or incorrect dosage of chemical.',
    answer4:
      '4 .' +
      'Plan Ahead Make a list of insecticides with alternating MoA that you will use in the next cropping season. Make sure to use registered mango insecticides Pay attention to the proper dosages and PHI of the chemicals to be used',
  },
];
export default class componentName extends Component {
  state = {
    disp: false,
    selected: null,
  };

  render() {
    const {selected} = this.state;
    return (
      <View style={{flex: 1, padding: 10}}>
        <ScrollView
          contentContainerStyle={{paddingBottom: 80}}
          style={{padding: 10, flex: 1, paddingVertical: 0}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 16,
              marginVertical: 30,
            }}>
            Aap Kay Sawal
          </Text>
          {FaqData.map((item, index) => {
            return (
              <FAQ
                item={item}
                index={index}
                selected={selected}
                setSelected={index => this.setState({selected: index})}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
