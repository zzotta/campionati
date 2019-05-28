import React from 'react';

import {
  DataTable,
} from 'react-native-paper';

export default class DriverResultDataTable extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <DataTable>
        <DataTable.Row>
          <DataTable.Cell>Penalties</DataTable.Cell>
          <DataTable.Cell numeric>{data.penalties}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Winch</DataTable.Cell>
          <DataTable.Cell numeric>{data.winch}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Time</DataTable.Cell>
          <DataTable.Cell numeric>{data.time}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    );
  }
}
