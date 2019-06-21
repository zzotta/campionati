import React from 'react';
import {ScrollView, View} from 'react-native';
import DriverResult from '../components/DriverResult';
import AddButton from '../components/AddButton';

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
      time: 12
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

export default class ResultsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {results: []};
    const { navigation } = this.props;
    const group = navigation.getParam('group', '');
    if(group) {
      this.state = {results: data[group]};
    }
  }

  render() {
    const { navigation } = this.props;
    const results = [...this.state.results];
    results.sort(compareResults);
    const resultElements = results.map((r, position) => 
      <DriverResult key={r.name} navigation={navigation} position={position + 1} data={r} />
    );

    return (
      <View>
        <ScrollView>
          {resultElements}
        </ScrollView>
        <AddButton navigation={navigation} />
      </View>
    );
  }
}
