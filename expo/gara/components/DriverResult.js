import React from 'react';

import {
  Card,
  Title,
} from 'react-native-paper';

import DriverResultDataTable from '../components/DriverResultDataTable';

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
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <DriverResultDataTable data={data} />
        </Card.Content>
      </Card>
    );
  }
}
