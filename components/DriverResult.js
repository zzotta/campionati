import React from 'react';

import {
  Card,
  Title,
  List,
} from 'react-native-paper';

import DriverResultDataTable from '../components/DriverResultDataTable';

export default class DriverResult extends React.Component {
  render() {
    const {data} = this.props;
    const {navigation} = this.props;
    return (
      <Card onLongPress={() => navigation.navigate('Input', data)}>
        <Card.Title
          title={data.name}
          subtitle={`${data.penalties}p   ${data.winch}w   ${data.time}s`}
          left={() => <Title>1</Title>}
        />
        <Card.Content>
          <List.Accordion title="Details">
            <List.Item
              title="Hidden"
              left={() => <DriverResultDataTable data={data} /> }
            />
          </List.Accordion>
        </Card.Content>
      </Card>
    );
  }
}
