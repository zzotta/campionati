import React from 'react';
import {View} from 'react-native';
import { TextInput, Appbar } from 'react-native-paper';


export default class DriverResultInputScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Update Result" />
          <Appbar.Action icon="save" onPress={() => navigation.goBack()} />
        </Appbar.Header>
      )
    };
  };

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      id: navigation.getParam('id', '').toString(),
      name: navigation.getParam('name', '').toString(),
      penalties: navigation.getParam('penalties', '').toString(),
      winch: navigation.getParam('winch', '').toString(),
      time: navigation.getParam('time', '').toString(),
    };

    this.updateDriverResultAndBack = this.updateDriverResultAndBack.bind(this);
  }

  updateDriverResultAndBack() {
    this.props.navigation.updateDriverResult(this.state);
    this.props.navigation.goBack();
  }

  render() {
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
