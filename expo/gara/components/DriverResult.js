import React from 'react';

import {
  Card,
  Title,
  Text,
} from 'react-native-paper';

export default class DriverResult extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <Card elevation={10}>
        <Card.Title title={data.name} subtitle="ABS" left={() => <Title>1</Title>} />
        <Card.Content>
          <Text>Penalties: {data.penalties}</Text>
          <Text>Winch: {data.winch}</Text>
          <Text>Time: {data.time}s</Text>
        </Card.Content>
      </Card>
    );
  }
}
