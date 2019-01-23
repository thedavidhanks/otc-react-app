import React, { Component } from 'react';
import IconSort from '../img/icons/baseline-sort-24px.svg';
import IconFilter from '../img/icons/baseline-filter_list-24px.svg';
import IconEdit from '../img/icons/baseline-edit-24px.svg';
import IconAdd from '../img/icons/baseline-add-24px.svg';
import ModalAddRig from './ModalAddRig.js';
//icons from https://material.io/tools/icons/?style=baseline

class Rigs extends Component {
    render(){
        return (
            <div className='col-sm'>
                <ModalAddRig />
                <div className='container'>
                    <div className='row'><h2 className='col'>Rigs</h2></div>
                    <div className='row'>
                        <div className='col container-fluid'>
                            Search
                            <span className='float-sm-right'>
                                <button className="btn mx-1" data-toggle="collapse" data-target="#filterRigBox" ><img src={IconFilter} alt="filter" title='filter'/></button>
                                <button className="btn mx-1" data-toggle="collapse" data-target="#sortRigBox" title='sort'><img src={IconSort} alt="sort" title="sort"/></button>
                                <button className="btn mx-1" data-toggle="tooltip"><img src={IconEdit} alt="edit" title='edit'/></button>
                                <button className="btn mx-1" data-toggle="modal" data-target=".modal-add-rig"><img src={IconAdd} alt="add" title='add'/></button>
                            </span>
                        </div>
                    </div>
                    <div className='row collapse' id="filterRigBox"><div className='container-fluid border border-secondary my-3'><p>filter options</p></div></div>
                    <div className='row collapse' id="sortRigBox"><div className='container-fluid border border-secondary my-3'><p>sort options</p></div></div>
                    <div className='row'>
                        <table className='table'>
                        <thead>
                        <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>type</th>
                        <th scope='col'>last location</th>
                        <th scope='col'>current operator</th>
                        </tr>
                        </thead>
                        </table>
                        <h4>Diamond</h4>
                        <table className='table table-hover'>
                        <tbody className='table-striped table-sm'>
                            <RigRow owner='Diamond' name='Ocean BlackHawk' loc='GOM' type='drillship' />
                            <RigRow owner='Diamond' name='Ocean BlackHornet' loc='US GoM' type='drillship' />
                            <RigRow owner='Diamond' name='Ocean BlackLion' loc='US GoM' type='drillship' />
                            <RigRow owner='Diamond' name='Ocean BlackRhino' loc='US GoM' type='drillship' />
                            <RigRow owner='Diamond' name='Ocean Confidence' loc='Canary Islands' type='Semi-Sub' />
                            <RigRow owner='Diamond' name='Ocean Courage' loc='Canary Islands' type='Semi-Sub' />
                        </tbody>
                        </table>
                        <h4>Noble</h4>
                        <table className='table table-hover'>
                            <tbody className='table-striped table-hover table-sm'>
                                <RigRow owner='Noble' name='Bob Douglas' loc='GOM' type='drillship' />
                                <RigRow owner='Noble' name='Bully I' loc='US GoM' type='drillship' />
                                <RigRow owner='Noble' name='Don Taylor' loc='US GoM' type='drillship' />
                                <RigRow owner='Noble' name='Gene House' loc='US GoM' type='Jackup' />
                                <RigRow owner='Noble' name='Hans Deul' loc='Africa' type='Jackup' />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
      );
    }
};
class RigRow extends Component {
    render(){
        const Operator = this.props.operator ? this.props.operator : "Unknown";
        return (
        <tr>
            <td>{this.props.name}</td>
            <td>{this.props.type}</td>
            <td>{this.props.loc}</td>
            <td>{Operator}</td>
        </tr>
        );
    }
}

export default Rigs;
