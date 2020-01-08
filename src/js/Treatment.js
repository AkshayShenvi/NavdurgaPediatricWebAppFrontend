import React from 'react';
import MaterialTable from 'material-table';
import { Alert } from 'react-bootstrap';

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount = () => {
        this.getAllTreatments();
    }

    getAllTreatments = () => {
        fetch('http://localhost:5000/treatments', {
            method: 'GET'
        }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({ data: responseJson });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    isDifferent = (oldData, newData) => {
        if (oldData.name !== newData.name || oldData.description !== newData.description || oldData.charges !== newData.charges)
            return true;
        return false;
    }

    onClickUpdate = (newtreatment) => {
        fetch('http://localhost:5000/treatment/' + newtreatment.id, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: newtreatment.name,
                description: newtreatment.description,
                charges: newtreatment.charges
            })
        }).then((responseJson) => {
            if (responseJson.status === 200) {
                this.getAllTreatments();
            } else {
                alert("Error in saving treatment!")
            }

        })
            .catch((error) => {
                console.log(error);
            });
    }

    isOk = (newtreatment) => {
        if (Object.keys(newtreatment).length === 0 || (!newtreatment.name || !newtreatment.charges))
            return false;
        else
            return true;
    }

    onClickAdd = (newtreatment) => {
        fetch('http://localhost:5000/treatment', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: newtreatment.name,
                description: newtreatment.description,
                charges: newtreatment.charges
            })
        }).then((responseJson) => {
            if (responseJson.status === 200) {
                this.getAllTreatments();
            } else {
                alert("Error in adding treatment!")
            }

        })
            .catch((error) => {
                console.log(error);
            });
    }

    onClickDelete = (id) => {
        fetch('http://localhost:5000/treatment/' + id, {
            method: 'DELETE'
        }).then((responseJson) => {

            if (responseJson.id === id) {
                alert("User deleted successfully!!");
                this.getAllTreatments();
            } else {
                alert("User not deleted!!");
            }
        })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <MaterialTable
                title="Treatments"
                columns={[
                    { title: 'Id', field: 'id', hidden: true },
                    { title: 'Name', field: 'name' },
                    { title: 'Decription', field: 'description' },
                    { title: 'Charges', field: 'charges', type: 'numeric' }
                ]}
                data={this.state.data}
                options={{ maxBodyHeight: '500px', fixedHeader: true }}
                editable={{
                    onRowAdd: newData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                if (this.isOk(newData)) {
                                    this.onClickAdd(newData);
                                } else {
                                    alert("Please provide at least Name and charges!!");
                                }

                            }, 600);
                        }),

                    onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                if (this.isDifferent(oldData, newData)) {
                                    this.onClickUpdate(newData);
                                }
                            }, 600);
                        })
                }}
                actions={[
                    {
                        icon: 'delete',
                        tooltip: 'Delete User',
                        onClick: (event, rowData) => this.onClickDelete(rowData.id)
                    }
                ]}
            />
        )
    }
}

export default Table;