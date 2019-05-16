import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'

import NewPanel from '../NewPanel.js';
import { addPipe, tubeTypeChange, strengthChange, weightChange, strValueChange, odValueChange, elongValueChange, weightValueChange, handleComboChange } from '../../actions';

const AddPipeForm = (props) => {
    return (
        <NewPanel title="Add Pipe (redux store)">
            <Form onSubmit={(e) => {e.preventDefault()}}>
                <Form.Group as={Row} controlId="tubeType">
                    <Col sm="3"><Form.Label>Type</Form.Label></Col>
                    <Col sm="8">
                        <Form.Control as="select" value={props.form.tubeType} onChange={ (e) => props.tubeTypeChange(e)}>
                            <option value="pipe">pipe</option>                        
                            <option value="casing">casing</option>
                            <option value="tube">tube</option>
                            <option value="wireline">wireline</option>
                            <option value="slickline">slickline</option>
                            <option value="eline">e-line</option>
                            <option value="combo">combo</option>
                        </Form.Control>
                    </Col>
                    <Col />
                </Form.Group>
                { !props.form.strengthFieldHidden ? 
                <Row>
                    <Col sm="3">
                    <Form.Group controlId="strengthType">
                        <Form.Control as="select" value={props.form.strengthType} onChange={ (e) => props.strengthChange(e)} >
                            <option value="yield" disabled={props.form.ysDisabled}>Yield Strength</option>                        
                            <option value="grade" disabled={props.form.gradeDisabled}>Grade</option>
                            <option value="breaking" disabled={props.form.bsDisabled}>Breaking Strength</option>                        
                        </Form.Control>
                    </Form.Group>
                    </Col>
                    <Col sm="8">                    
                        <Form.Group controlId="Strength">
                            <Form.Control 
                                type="text" 
                                value={props.form.strength} 
                                onChange={(e) => props.strValueChange(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm="1">{props.form.strUnits}</Col>
                </Row> : 
                null
                }
                { !props.form.odFieldHidden ? 
                <Form.Group as={Row} controlId="outsideDiameter">
                    <Form.Label column sm="3">OD</Form.Label>
                    <Col sm="8">
                    <Form.Control type="text" value={props.form.newOD} onChange={(e) => props.odValueChange(e.target.value)}/>
                    </Col>
                    <Col sm="1">in</Col>
                </Form.Group> :
                null 
                }
                { !props.form.elongationFieldHidden ? 
                <Form.Group as={Row} controlId="elongation">
                    <Form.Label column sm="3">Elongation</Form.Label>
                    <Col sm="8">
                    <Form.Control type="text" value={props.form.elongation} onChange={(e) => props.elongValueChange(e.target.value)}/>
                    </Col>
                    <Col sm="1">%</Col>
                </Form.Group> :
                null
                }
                { !props.form.weightWallFieldHidden ? 
                <Row>

                    <Form.Group as={Col} sm="3" controlId="weightType">
                        <Form.Control 
                            as="select"
                            value={props.form.weightType}
                            onChange={props.weightChange} 
                        >
                            <option value="weight">Weight</option>                        
                            <option value="wall">Wall thickness</option>                 
                        </Form.Control>
                    </Form.Group>                  
                    <Form.Group  as={Col} sm="8" controlId="weightWall">
                        <Form.Control 
                            type="text" 
                            value={props.form.weight} 
                            onChange={ (e) => props.weightValueChange(e.target.value)}
                        />
                    </Form.Group>
                    <Col sm="1">{props.form.weightUnits}</Col>
                </Row> :
                null
                }
                {!props.form.comboFieldHidden ?
                <Row>
                    <Form.Group  as={Col} md="12">
                        {props.pipes.map(pipe => (
                        <Form.Check 
                            inline 
                            label={pipe.id} 
                            type="checkbox" 
                            name={pipe.id} 
                            id={`combo-${pipe.id}`} 
                            key={`combo-${pipe.id}`} 
                            checked={props.form.comboBoxes[pipe.id]} 
                            onChange={props.handleComboChange}
                        />))}
                    </Form.Group>
                </Row>: 
                null}
                <Row>
                    <Col md="4"/>
                    <Col md="4"><Button variant="primary" type="submit" onClick={() => props.addPipe(props.form)}>Add</Button></Col>
                    <Col md="4"/>
                </Row>
            </Form>
        </NewPanel>
    );
};

const mapStateToProps = (state) => {
    return { form: state.pipeForm, pipes: state.pipes } ;
};
export default connect(mapStateToProps, {addPipe, tubeTypeChange, strengthChange, weightChange, strValueChange, odValueChange, elongValueChange, weightValueChange, handleComboChange} )(AddPipeForm);



