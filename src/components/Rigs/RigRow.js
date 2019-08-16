import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <Button variant="outline-link" className="mx-1"><img src={IconEdit} alt="edit" title="edit"/></Button>
            <Button variant="outline-link" className="mx-1"><img src={IconTrash} alt="trash" title='trash'/></Button>
        </span> : null;
    return(
    
        <tr>
            <td>
                <Row>
                    <Col>{Owner}</Col>
                    <Col>{props.name}</Col>
                    <Col>{RigType}</Col>
                    <Col>{props.loc}</Col>
                    <Col>{Operator}</Col>
                    <Col>
                        <ButtonToolbar>
                        <Button variant="outline-link" className="mx-1" data-toggle="collapse" data-target={"#"+rigBoxid} ><img src={IconExpand} alt="more" title="more"/></Button>
                        {EditTrashButtons}
                        </ButtonToolbar>
                    </Col>
                </Row>    
                <Row className='collapse' id={rigBoxid}>
                    <Col >hidden rig info</Col>
                </Row>
            </td>
        </tr>  
    );
};

export default RigRow;

