import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    );
  }
}
