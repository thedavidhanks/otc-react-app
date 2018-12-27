import React, { Component } from 'react';

class Rigs extends Component {
    render(){
        return (
            <div>
                <h3>Rigs</h3>
                <table className='table'>
                <thead>
                <tr>
                <th scope='col'>Name</th>
                <th scope='col'>type</th>
                <th scope='col'>last location</th>
                <th scope='col'>current operator</th>
                </tr>
                </thead>
                <tbody className='table-striped'>
                    <RigRow owner='Diamond' name='Ocean BlackHawk' loc='GOM' type='drillship' />
                    <RigRow owner='Diamond' name='Ocean BlackHornet' loc='US GoM' type='drillship' />
                    <RigRow owner='Diamond' name='Ocean BlackLion' loc='US GoM' type='drillship' />
                    <RigRow owner='Diamond' name='Ocean BlackRhino' loc='US GoM' type='drillship' />
                    <RigRow owner='Diamond' name='Ocean Confidence' loc='Canary Islands' type='Semi-Sub' />
                    <RigRow owner='Diamond' name='Ocean Courage' loc='Canary Islands' type='Semi-Sub' />
                </tbody>
                </table>
            </div>
      );
    }
};
class RigRow extends Component {
    render(props){
        return (
        <tr>
            <td>{this.props.name}</td>
            <td>{this.props.type}</td>
            <td>{this.props.loc}</td>
            <td>{this.props.operator}</td>
        </tr>
        );
    }
}

export default Rigs;
