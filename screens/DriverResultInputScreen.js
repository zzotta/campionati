import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';

export default class DriverResultInputScreen extends React.Component {
  state = {
    name: '',
    penalties: '',
    winch: '',
    time: '',
  };

  componentDidMount() {
    const { navigation } = this.props;
    const driverName = navigation.getParam('name', '').toString();
    const driverPenalties = navigation.getParam('penalties', '').toString();
    const driverWinch = navigation.getParam('winch', '').toString();
    const driverTime = navigation.getParam('time', '').toString();
    this.setState({
      name: driverName,
      penalties: driverPenalties,
      winch: driverWinch,
      time: driverTime,
    });
  }

  render() {
    const { resultModifier } = this.props.navigation;

    return (
      <View>
        <TextInput
          label='Name Surname'
          placeholder='Insert name and surname'
          value={this.state.name}
          onChangeText={text => this.setState({ name: text })}
        />
        <TextInput
          label='Penalties'
          placeholder='Insert penalties count'
          value={this.state.penalties}
          onChangeText={text => this.setState({ penalties: text })}
        />
        <TextInput
          label='Winch'
          placeholder='Insert winch usage count'
          value={this.state.winch}
          onChangeText={text => this.setState({ winch: text })}
        />
        <TextInput
          label='Time'
          placeholder='Insert time in seconds'
          value={this.state.time}
          onChangeText={text => this.setState({ time: text })}
        />
      </View>
    );
  }
}
