import React from 'react';

import {
  Card,
  Avatar,
//  List,
} from 'react-native-paper';

//import DriverResultDataTable from '../components/DriverResultDataTable';

export default class DriverResult extends React.Component {
  render() {
    const {data} = this.props;
    const {resultModifier} = this.props;
    const navigationData = Object.assign({}, data, {resultModifier: resultModifier});
    const {position} = this.props;
    const {navigation} = this.props;
    return (
      <Card onLongPress={() => navigation.navigate('Input', navigationData)}>
        <Card.Title
          title={data.name}
          subtitle={`${data.penalties}p   ${data.winch}w   ${data.time}s`}
          left={() => <Avatar.Text size={48} label={position} />}
        />
      </Card>
    );
  }
}

//<Card.Content>
//<List.Accordion title="Details">
//  <List.Item
//    title="Hidden"
//    left={() => <DriverResultDataTable data={data} /> }
//  />
//</List.Accordion>
//</Card.Content>
