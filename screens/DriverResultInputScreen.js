import React from 'react';
import {View} from 'react-native';
import { TextInput } from 'react-native-paper';


export default class DriverResultInputScreen extends React.Component {
  constructor(props) {
    super(props);
    const { route } = this.props;
    this.state = {
      group: (route.params?.group ?? '---').toString(), 
      id: (route.params?.id ?? '').toString(),
      name: (route.params?.name ?? '').toString(),
      penalties: (route.params?.penalties ?? '').toString(),
      winch: (route.params?.winch ?? '').toString(),
      time: (route.params?.time ?? '').toString(),
    };

    this.updateDriverResultAndBack = this.updateDriverResultAndBack.bind(this);
  }

  componentDidMount() {
    this.props.route.params.updateDriverResultAndBack = this.updateDriverResultAndBack;    
  }

  updateDriverResultAndBack() {
    this.props.route.params.updateDriverResult(this.state);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View>
        <TextInput
          label='Group'
          placeholder='Insert vehicle class'
          value={this.state.group}
          onChangeText={text => this.setState({ group: text })}
        />
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
