import React from 'react';

import {
  Card,
  Title,
} from 'react-native-paper';

export default class DriverResult extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <Card>
        <Card.Title
          title={data.name}
          subtitle={`${data.penalties}p   ${data.winch}w   ${data.time}s`}
          left={() => <Title>1</Title>}
        />
      </Card>
    );
  }
}
