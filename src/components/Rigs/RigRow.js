import React from 'react';
import Button from 'react-bootstrap/Button';

import IconEdit from '../../img/icons/baseline-edit-24px.svg';
import IconTrash from '../../img/icons/sharp-delete-24px.svg';
import IconExpand from '../../img/icons/sharp-arrow_drop_down_circle-24px.svg';


const RigRow = (props) => {
    const Operator = props.operator ? props.operator : "Unknown";
    const Owner = props.owner ? props.owner : "Unknown";
    const RigType = props.type ? props.type : "Unknown";
    
    const rigBoxid = "detailsRigBox"+props.id;
    const EditTrashButtons = (props.auth.uid && props.auth.emailVerified) ?  
        <span>  
            <img src={IconEdit} alt="edit" title="edit"/> 
            <img src={IconTrash} alt="trash" title='trash'/>
        </span> : null;
    return(
    
        <tr>
            <td>{Owner}</td>
            <td>{props.name}</td>
            <td>{RigType}</td>
            <td>{props.loc}</td>
            <td>{Operator}</td>
            <td>
                <Button className="mx-1" data-toggle="collapse" data-target={"#"+rigBoxid} ><img src={IconExpand} alt="more" title="more"/></Button>
                {EditTrashButtons}
            </td>
        </tr>  
    );
};

export default RigRow;

