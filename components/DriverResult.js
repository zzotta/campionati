import React from 'react';

import {
  Card,
  Avatar,
//  List,
} from 'react-native-paper';

//import DriverResultDataTable from '../components/DriverResultDataTable';

export default function DriverResult(props) {
  const { data } = props;
  const { updateDriverResult } = props;
  const navigationData = Object.assign({}, data, {updateDriverResult: updateDriverResult});
  const { position } = props;
  const { navigation } = props;

  return (
    <Card onLongPress={() => navigation.navigate('Input', navigationData)}>
      <Card.Title
        title={data.name}
        subtitle={`${data.group}   ${data.penalties}p   ${data.winch}w   ${data.time}s`}
        left={() => <Avatar.Text size={48} label={position} />}
      />
    </Card>
  );
}

//<Card.Content>
//<List.Accordion title="Details">
//  <List.Item
//    title="Hidden"
//    left={() => <DriverResultDataTable data={data} /> }
//  />
//</List.Accordion>
//</Card.Content>
