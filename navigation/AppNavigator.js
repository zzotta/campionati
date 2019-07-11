import { createAppContainer, createStackNavigator } from 'react-navigation';

import ResultsScreen from '../screens/ResultsScreen';
import DriverResultInputScreen from '../screens/DriverResultInputScreen';

export default createAppContainer(createStackNavigator(
  {
    Results: {
      screen: ResultsScreen,
      params: {
        title: 'Results'
      }
    },
    Input: {
      screen: DriverResultInputScreen,
    },
  },
  {
    initialRouteName: 'Results',
  }
));
