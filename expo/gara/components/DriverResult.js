import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class DriverResult extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <View>
        <Text> {data.name} </Text>
        <View style={{flexDirection: 'row'}}>
          <Text> Penalties: {data.penalties} </Text>
          <Text> Winch: {data.winch} </Text>
          <Text> Time: {data.time}s</Text>
        </View>
      </View>
    );
  }
}