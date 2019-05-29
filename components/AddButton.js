import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

export default class AddButton extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <FAB
        style={styles.fab}
        icon="add"
        onPress={() => {navigation.navigate('Input');}}
      />
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
