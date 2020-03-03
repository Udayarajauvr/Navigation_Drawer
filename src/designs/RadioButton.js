import * as React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

export default class RadioButtons extends React.Component {
  state = {
    value: 'BE',
  };

  render() {
    return(
      <RadioButton.Group
        onValueChange={value => this.setState({ value })}
        value={this.state.value}
      >
        <View>
          <Text>BE</Text>
          <RadioButton value="BE" />
        </View>
        <View>
          <Text>NEET</Text>
          <RadioButton value="NEET" />
        </View>
      </RadioButton.Group>
    )
  }
}