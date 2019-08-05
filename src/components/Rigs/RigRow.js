import React from 'react';
import IconEdit from '../../img/icons/baseline-edit-24px.svg';

const RigRow = (props) => {
    const Operator = props.operator ? props.operator : "Unknown";
    const Owner = props.owner ? props.owner : "Unknown";
    const RigType = props.type ? props.type : "Unknown";
    return(
        <tr>
            <td>{Owner}</td>
            <td>{props.name}</td>
            <td>{RigType}</td>
            <td>{props.loc}</td>
            <td>{Operator}</td>
            <td>Expand / <img src={IconEdit} alt="edit" title='edit'/> / trash</td>
        </tr>
        );
    };

export default RigRow;

