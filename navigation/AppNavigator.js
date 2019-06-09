import { createAppContainer, createStackNavigator } from 'react-navigation';

import ResultsScreen from '../screens/ResultsScreen';
import DriverResultInputScreen from '../screens/DriverResultInputScreen';

const data = {
  ABS: [
    {
      name: 'Marco Comparato',
      penalties: 3,
      winch: 5,
      time: 312
    },
    {
      name: 'Samuele Comparato',
      penalties: 1,
      winch: 1,
      time: 443
    },
    {
      name: 'Massimo Arcara',
      penalties: 4,
      winch: 1,
      time: 222
    },
    {
      name: 'Silvia Comparato',
      penalties: 1,
      winch: 1,
      time: 345
    },
    {
      name: 'Gabriele Cieri',
      penalties: 1,
      winch: 0,
      time: 123
    },
    {
      name: 'Daniele Agrestini',
      penalties: 1,
      winch: 1,
      time: 133
    },
    {
      name: 'Paolo Rossi',
      penalties: 3,
      winch: 0,
      time: 221
    },
    {
      name: 'Gianluca Russo',
      penalties: 1,
      winch: 1,
      time: 145
    },
    {
      name: 'Marco Comparato2',
      penalties: 3,
      winch: 5,
      time: 312
    },
    {
      name: 'Valerio Rumagnoli2',
      penalties: 1,
      winch: 1,
      time: 443
    },
    {
      name: 'Massimo Arcara2',
      penalties: 4,
      winch: 1,
      time: 222
    },
    {
      name: 'Ivan Menarini2',
      penalties: 1,
      winch: 1,
      time: 345
    },
    {
      name: 'Gabriele Cieri2',
      penalties: 1,
      winch: 0,
      time: 123
    },
    {
      name: 'Daniele Agrestini2',
      penalties: 1,
      winch: 1,
      time: 133
    },
    {
      name: 'Paolo Rossi2',
      penalties: 3,
      winch: 0,
      time: 221
    },
    {
      name: 'Gianluca Russo2',
      penalties: 1,
      winch: 1,
      time: 145
    }
  ],
  Lexan: [
    {
      name: 'Marco Comparatol',
      penalties: 3,
      winch: 5,
      time: 312
    },
    {
      name: 'Samuele Comparatol',
      penalties: 1,
      winch: 1,
      time: 443
    },
    {
      name: 'Massimo Arcaral',
      penalties: 4,
      winch: 1,
      time: 222
    },
    {
      name: 'Silvia Comparatol',
      penalties: 1,
      winch: 1,
      time: 345
    },
    {
      name: 'Gabriele Cieril',
      penalties: 1,
      winch: 0,
      time: 123
    },
    {
      name: 'Daniele Agrestinil',
      penalties: 1,
      winch: 1,
      time: 133
    },
    {
      name: 'Paolo Rossil',
      penalties: 3,
      winch: 0,
      time: 221
    },
    {
      name: 'Gianluca Russol',
      penalties: 1,
      winch: 1,
      time: 145
    },
    {
      name: 'Marco Comparato2l',
      penalties: 3,
      winch: 5,
      time: 312
    },
    {
      name: 'Valerio Rumagnoli2l',
      penalties: 1,
      winch: 1,
      time: 443
    },
    {
      name: 'Massimo Arcara2l',
      penalties: 4,
      winch: 1,
      time: 222
    },
    {
      name: 'Ivan Menarini2l',
      penalties: 1,
      winch: 1,
      time: 345
    },
    {
      name: 'Gabriele Cieri2l',
      penalties: 1,
      winch: 0,
      time: 123
    },
    {
      name: 'Daniele Agrestini2l',
      penalties: 1,
      winch: 1,
      time: 133
    },
    {
      name: 'Paolo Rossi2l',
      penalties: 3,
      winch: 0,
      time: 221
    },
    {
      name: 'Gianluca Russo2l',
      penalties: 1,
      winch: 1,
      time: 145
    }
  ],
};

export default createAppContainer(createStackNavigator(
  {
    ABS: {
      screen: ResultsScreen,
      params: {
        results: data.ABS
      }
    },
    Lexan: {
      screen: ResultsScreen,
      params: {
        results: data.Lexan
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
