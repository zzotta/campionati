import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { Provider as PaperProvider, DarkTheme } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return ( 
      <PaperProvider theme={DarkTheme}>
        <AppNavigator />
      </PaperProvider>
    );
  }
}
