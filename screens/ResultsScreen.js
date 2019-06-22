import React from 'react';
import {ScrollView, View} from 'react-native';
import DriverResult from '../components/DriverResult';
import AddButton from '../components/AddButton';

const data = {
  ABS: {
    'marco_comparato': {
      name: 'Marco Comparato',
      penalties: 3,
      winch: 5,
      time: 312
    },
    'samuele_comparato': {
      name: 'Samuele Comparato',
      penalties: 1,
      winch: 1,
      time: 443
    },
    'massimo_arcara': {
      name: 'Massimo Arcara',
      penalties: 4,
      winch: 1,
      time: 222
    },
    'silvia_comparato': {
      name: 'Silvia Comparato',
      penalties: 1,
      winch: 1,
      time: 345
    },
    'gabriele_cieri': {
      name: 'Gabriele Cieri',
      penalties: 1,
      winch: 0,
      time: 123
    },
    'daniele_agrestini': {
      name: 'Daniele Agrestini',
      penalties: 1,
      winch: 1,
      time: 133
    },
    'paolo_rossi': {
      name: 'Paolo Rossi',
      penalties: 3,
      winch: 0,
      time: 221
    },
    'gianluca_russo': {
      name: 'Gianluca Russo',
      penalties: 1,
      winch: 1,
      time: 145
    },
    'alessandro_comparato': {
      name: 'Alessandro Comparato',
      penalties: 3,
      winch: 5,
      time: 312
    },
    'valerio_ottaviani': {
      name: 'Valerio Ottaviani',
      penalties: 1,
      winch: 1,
      time: 443
    },
    'massimo_noe': {
      name: 'Massimo Noe',
      penalties: 4,
      winch: 1,
      time: 222
    },
    'ivan_terrina': {
      name: 'Ivan Terrina',
      penalties: 1,
      winch: 1,
      time: 345
    },
    'gabriele_cerrotti': {
      name: 'Gabriele Cerrotti',
      penalties: 1,
      winch: 0,
      time: 12
    },
    'daniele_bosco': {
      name: 'Daniele Bosco',
      penalties: 1,
      winch: 1,
      time: 133
    },
    'paolo_verdi': {
      name: 'Paolo Verdi',
      penalties: 3,
      winch: 0,
      time: 221
    },
    'gianluca_torre': {
      name: 'Gianluca Torre',
      penalties: 1,
      winch: 1,
      time: 145
    }
  },
  Lexan: {
    'marco_comparato': {
      name: 'Marco Comparato',
      penalties: 3,
      winch: 5,
      time: 312
    },
    'samuele_comparato': {
      name: 'Samuele Comparato',
      penalties: 1,
      winch: 1,
      time: 443
    },
    'massimo_arcara': {
      name: 'Massimo Arcara',
      penalties: 4,
      winch: 1,
      time: 222
    },
    'silvia_comparato': {
      name: 'Silvia Comparato',
      penalties: 1,
      winch: 1,
      time: 345
    },
    'gabriele_cieri': {
      name: 'Gabriele Cieri',
      penalties: 1,
      winch: 0,
      time: 123
    },
    'daniele_agrestini': {
      name: 'Daniele Agrestini',
      penalties: 1,
      winch: 1,
      time: 133
    },
    'paolo_rossi': {
      name: 'Paolo Rossi',
      penalties: 3,
      winch: 0,
      time: 221
    },
    'gianluca_russo': {
      name: 'Gianluca Russo',
      penalties: 1,
      winch: 1,
      time: 145
    },
    'alessandro_comparato': {
      name: 'Alessandro Comparato',
      penalties: 3,
      winch: 5,
      time: 312
    },
    'valerio_ottaviani': {
      name: 'Valerio Ottaviani',
      penalties: 1,
      winch: 1,
      time: 443
    },
    'massimo_noe': {
      name: 'Massimo Noe',
      penalties: 0,
      winch: 0,
      time: 99
    },
  },
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
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('group', 'Unknown Group'),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      group: 'ABS',
      results: [],
    };
    const { navigation } = this.props;
    const group = navigation.getParam('group', '');
    if(group) {
      this.state = {
        group: group,
        results: data[group],
      };
    }

    this.updateDriverResult = this.updateDriverResult.bind(this);
  }

  updateDriverResult(r) {
    this.setState(
      {
        [r.id]: {
          name: r.name,
          penalties: r.penalties,
          winch: r.winch,
          time: r.time,
        }
      }
    );
  }

  render() {
    const { navigation } = this.props;
    const results = [];
    for(let driver_id in this.state.results) {
      results.push(Object.assign({id: driver_id}, this.state.results[driver_id]));
    }
    results.sort(compareResults);
    const resultElements = results.map((r, position) => 
      <DriverResult
        key={r.id}
        navigation={navigation}
        position={position + 1}
        data={r}
        updateDriverResult={this.updateDriverResult}
      />
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
