import { createAppContainer, createStackNavigator } from 'react-navigation';

import ResultsScreen from '../screens/ResultsScreen';
import DriverResultInputScreen from '../screens/DriverResultInputScreen';

export default createAppContainer(createStackNavigator(
  {
    ABS: {
      screen: ResultsScreen,
      params: {
        group: 'ABS'
      }
    },
    Lexan: {
      screen: ResultsScreen,
      params: {
        group: 'Lexan'
      }
    },
    Input: {
      screen: DriverResultInputScreen,
    },
  },
  {
    initialRouteName: 'ABS',
  }
));
