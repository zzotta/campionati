import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import DriverResult from '../components/DriverResult';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation } = this.props;
    const results = navigation.getParam('results', 'NO-ID');
    const resultElements = results.map((r) => <DriverResult key={r.name} data={r} />);

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {resultElements}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  plusContainer: {
    flex: 1,
    backgroundColor: '#fbfbfb',
  },
});
