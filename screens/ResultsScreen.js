import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import DriverResult from '../components/DriverResult';
import AddButton from '../components/AddButton';

import { testData01 as data } from '../data/testData01';


export default class ResultsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', ''),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      results: {...data},
    };

    this.updateDriverResult = this.updateDriverResult.bind(this);
  }

  updateDriverResult(r) {
    const generateDriverId = name => name.trim().toLowerCase().replace(/\s+/g, '_');
    const driverId = r.id ? r.id : generateDriverId(r.name);
 
    const newResult = {
      name: r.name,
      penalties: r.penalties,
      winch: r.winch,
      time: r.time,
    };

    this.setState(
      {
        ...this.state,
        results: {
          ...this.state.results,
          [r.group]: {
            ...this.state.results[r.group],
            [driverId]: newResult,
          }
        }
      }
    );
  }

  render() {
    const { navigation } = this.props;
    const results = [];
    for(let group in this.state.results) {
      for(let driver_id in this.state.results[group]) {
        results.push(Object.assign(
          {
            key: `${driver_id}_${group}`,
            group,
          },
          this.state.results[group][driver_id])
        );
      }
    }

    const compareResults = (a, b) => {
      let res = a.penalties - b.penalties;
      
      if(!res) {
        res = a.winch - b.winch;
      }
    
      if(!res) {
        res = a.time - b.time;
      }
    
      return res;
    };

    results.sort(compareResults);
    const resultElements = results.map((r, position) => 
      <DriverResult
        key={r.key}
        navigation={navigation}
        position={position + 1}
        data={r}
        updateDriverResult={this.updateDriverResult}
      />
    );

    return (
      <View style={styles.fill}>
        <ScrollView>
          {resultElements}
        </ScrollView>
        <AddButton navigation={navigation} updateDriverResult={this.updateDriverResult} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
});
