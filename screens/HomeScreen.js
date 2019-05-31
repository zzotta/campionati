import React from 'react';
import {ScrollView, View} from 'react-native';
import DriverResult from '../components/DriverResult';
import AddButton from '../components/AddButton';

export default class HomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const results = navigation.getParam('results', 'NO-ID');
    const resultElements = results.map((r) => <DriverResult key={r.name} navigation={navigation} data={r} />);

    return (
      <View>
        <ScrollView contentContainerStyle={{paddingTop: 30}}>
          {resultElements}
        </ScrollView>
        <AddButton navigation={navigation} />
      </View>
    );
  }
}
