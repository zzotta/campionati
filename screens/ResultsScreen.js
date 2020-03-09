import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import DriverResult from '../components/DriverResult';
import AddButton from '../components/AddButton';

import { testData01 as data } from '../data/testData01';
import * as FileSystem from 'expo-file-system';
import { createUniqueIdentifier } from '../models/models.js';

const dataDirectoryURI = FileSystem.cacheDirectory + 'removeme/';
const dataFileURI = dataDirectoryURI + 'data.json';

export default class ResultsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', ''),
    };
  };

  constructor(props) {
    super(props);
    this.state = {results: {}};
    this.updateDriverResult = this.updateDriverResult.bind(this);
  }

  componentDidMount() {
    const readDataAsync = async () => {
      const { exists } = await FileSystem.getInfoAsync(dataFileURI);
      if(exists) {
        const dataString = await FileSystem.readAsStringAsync(dataFileURI);
        const dataFromFile = JSON.parse(dataString);
        this.setState({results: {...dataFromFile}});
      } else {
        this.setState({results: {}});
      }
    };
    
    readDataAsync(dataFileURI);
  }

  updateDriverResult(r) {
    const driverId = r.id ? r.id : createUniqueIdentifier([r.name]);

    // Get a Subset of an Object
    // https://medium.com/@captaindaylight/get-a-subset-of-an-object-9896148b9c72
    const newResult = (({name, penalties, winch, time}) => ({name, penalties, winch, time}))(r);

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

    const writeDataAsync = async () => {
      const { exists } = await FileSystem.getInfoAsync(dataDirectoryURI);
      if(!exists) {
        await FileSystem.makeDirectoryAsync(dataDirectoryURI);
      }
      await FileSystem.writeAsStringAsync(dataFileURI, JSON.stringify(this.state.results));
    };
    
    writeDataAsync();
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
