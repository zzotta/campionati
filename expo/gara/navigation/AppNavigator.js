import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

const data = [
  {
    name: 'Marco Comparato',
    ABS: [
      {
        penalties: 3,
        winch: 5,
        time: 312
      },
      {
        penalties: 1,
        winch: 1,
        time: 443
      }
    ]
  },
  {
    name: 'Massimo Arcara',
    ABS: [
      {
        penalties: 4,
        winch: 1,
        time: 222
      },
      {
        penalties: 1,
        winch: 1,
        time: 345
      }
    ]
  },
  {
    name: 'Gabriele Cieri',
    ABS: [
      {
        penalties: 1,
        winch: 0,
        time: 123
      },
      {
        penalties: 1,
        winch: 1,
        time: 133
      }
    ],
    Lexan: [
      {
        penalties: 3,
        winch: 0,
        time: 221
      },
      {
        penalties: 1,
        winch: 1,
        time: 145
      }
    ]
  }
];

export default createAppContainer(createStackNavigator({
  Home: {
    screen: HomeScreen,
    params: {
      parametro_di_test: 'pippo'
    }
  }
}));
