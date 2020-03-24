import React, { useState, useEffect } from 'react';
import {View} from 'react-native';
import { TextInput, Appbar } from 'react-native-paper';


export default function DriverResultInputScreen(props) {
  const { navigation } = props;

  const id = navigation.getParam('id', '---').toString();

  const [group    , setGroup    ] = useState(navigation.getParam('group', '---').toString());
  const [name     , setName     ] = useState(navigation.getParam('name', '').toString());
  const [penalties, setPenalties] = useState(navigation.getParam('penalties', '').toString());
  const [winch    , setWinch    ] = useState(navigation.getParam('winch', '').toString());
  const [time     , setTime     ] = useState(navigation.getParam('time', '').toString());

  const updateDriverResultAndBack = () => {
    //bindind issues?
    console.log(group);

    navigation.getParam('updateDriverResult')({
      group: group,
      id: id,
      name: name,
      panalties: penalties,
      winch: winch,
      time: time
    });
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setParams({ updateDriverResultAndBack: updateDriverResultAndBack });
  }, []);

  return (
    <View>
      <TextInput
        label='Group'
        placeholder='Insert vehicle class'
        value={group}
        onChangeText={text => setGroup(text)}
      />
      <TextInput
        label='Name Surname'
        placeholder='Insert name and surname'
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        label='Penalties'
        placeholder='Insert penalties count'
        value={penalties}
        onChangeText={text => setPenalties(text)}
      />
      <TextInput
        label='Winch'
        placeholder='Insert winch usage count'
        value={winch}
        onChangeText={text => setWinch(text)}
      />
      <TextInput
        label='Time'
        placeholder='Insert time in seconds'
        value={time}
        onChangeText={text => setTime(text)}
      />
    </View>
  );
}

DriverResultInputScreen.navigationOptions = ({ navigation }) => {
  return {
    header: () => (
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Update Result" />
        <Appbar.Action icon="content-save" onPress={navigation.getParam('updateDriverResultAndBack')} />
      </Appbar.Header>
    )
  };
};

// export default class DriverResultInputScreen extends React.Component {
//   static navigationOptions = ({ navigation }) => {
//     return {
//       header: () => (
//         <Appbar.Header>
//           <Appbar.BackAction onPress={() => navigation.goBack()} />
//           <Appbar.Content title="Update Result" />
//           <Appbar.Action icon="content-save" onPress={navigation.getParam('updateDriverResultAndBack')} />
//         </Appbar.Header>
//       )
//     };
//   };

//   constructor(props) {
//     super(props);
//     const { navigation } = this.props;
//     this.state = {
//       group: navigation.getParam('group', '---').toString(), 
//       id: navigation.getParam('id', '').toString(),
//       name: navigation.getParam('name', '').toString(),
//       penalties: navigation.getParam('penalties', '').toString(),
//       winch: navigation.getParam('winch', '').toString(),
//       time: navigation.getParam('time', '').toString(),
//     };

//     this.updateDriverResultAndBack = this.updateDriverResultAndBack.bind(this);
//   }

//   componentDidMount() {
//     this.props.navigation.setParams({ updateDriverResultAndBack: this.updateDriverResultAndBack });    
//   }

//   updateDriverResultAndBack() {
//     this.props.navigation.getParam('updateDriverResult')(this.state);
//     this.props.navigation.goBack();
//   }

//   render() {
//     return (
//       <View>
//         <TextInput
//           label='Group'
//           placeholder='Insert vehicle class'
//           value={this.state.group}
//           onChangeText={text => this.setState({ group: text })}
//         />
//         <TextInput
//           label='Name Surname'
//           placeholder='Insert name and surname'
//           value={this.state.name}
//           onChangeText={text => this.setState({ name: text })}
//         />
//         <TextInput
//           label='Penalties'
//           placeholder='Insert penalties count'
//           value={this.state.penalties}
//           onChangeText={text => this.setState({ penalties: text })}
//         />
//         <TextInput
//           label='Winch'
//           placeholder='Insert winch usage count'
//           value={this.state.winch}
//           onChangeText={text => this.setState({ winch: text })}
//         />
//         <TextInput
//           label='Time'
//           placeholder='Insert time in seconds'
//           value={this.state.time}
//           onChangeText={text => this.setState({ time: text })}
//         />
//       </View>
//     );
//   }
// }
