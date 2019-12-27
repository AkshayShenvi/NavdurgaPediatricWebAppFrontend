import React from 'react';
import MaterialTable from 'material-table';

class Table1 extends React.Component {
  render() {
    return (
      <MaterialTable 
        title="Treatments"
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Decription', field: 'desc' },
          { title: 'Charges', field: 'charges', type: 'numeric' },
          // {
          //   title: 'Birth Place',
          //   field: 'birthCity',
          //   lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          // },
        ]}
        data={[
          { name: 'Mehmet', desc: 'Baran', charges: 1987 },
          { name: 'Zerya Betül', desc: 'Baran', charges: 2017 },
          { name: 'Mehmet', desc: 'Baran', charges: 1987 },
          { name: 'Zerya Betül', desc: 'Baran', charges: 2017 },
          { name: 'Mehmet', desc: 'Baran', charges: 1987 },
          { name: 'Zerya Betül', desc: 'Baran', charges: 2017 },
          { name: 'Mehmet', desc: 'Baran', charges: 1987 },
          { name: 'Zerya Betül', desc: 'Baran', charges: 2017 },
        ]} 
        options = {{ maxBodyHeight : '500px', fixedHeader : true}}
        actions={[
          {
            icon: 'save',
            tooltip: 'Save User',
            onClick: (event, rowData) => alert("You saved " + rowData.name)
          },
          {
            icon: 'delete',
            tooltip: 'Delete User',
            onClick: (event, rowData) => alert("You want to delete " + rowData.name)
          },
          {
            icon: 'add',
            tooltip: 'Add User',
            isFreeAction: true,
            onClick: (event) => alert("You want to add a new row")
          }
        ]}
      />
    )
  }
}

export default Table1;