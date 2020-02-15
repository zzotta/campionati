import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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
