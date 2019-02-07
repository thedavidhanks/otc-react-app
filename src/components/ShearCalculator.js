import React, { Component } from 'react';
import { ButtonToolbar, Button, Table } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import NewPanel from './NewPanel.js';

function createPipeRows(Obj){
    var pipeRows = [];
    for (var pipe in Obj){
        pipeRows.push(<tr key={Obj[pipe].id}><td>{Obj[pipe].id}</td><td>{Obj[pipe].strength}</td><td>{Obj[pipe].OD}</td><td>{Obj[pipe].wall}</td></tr>);
    }
    return pipeRows;
}
class ShearCalculator extends Component{
    constructor(props){
        super(props);
        this.changeStrength = this.changeStrength.bind(this);
        this.updateStrengthValue = this.updateStrengthValue.bind(this);
        this.addShearable = this.addShearable.bind(this);
        this.state = {
            strUnits: 'ksi',
            strength: ''
        };
        this.state.pipes = [
            {
                id: 1,
                type: 'pipe',
                OD: 5,
                wall: 0.25,
                ppf: 19.5,
                strType: 'yield',
                strength: 130
            },{
                id: 2,
                type: 'pipe',
                OD: 4.5,
                wall: 0.2,
                ppf: 10.5,
                strType: 'yield',
                strength: 130
            }        
        ];
    };
    changeStrength(event){
        switch(event.target.value){
            case 'grade':
                this.setState({strUnits: ''});
                break;
            case 'breaking':
                this.setState({strUnits: 'kips'});
                break;
            default:
            case 'yield':
                this.setState({strUnits: 'ksi'});
                break;
        }
    };
    addShearable(event){
        event.preventDefault();
        console.log("strength: "+ this.state.strength);
    }
    updateStrengthValue(e){
        this.setState({strength: e.target.value});
    }
    render(){
        let pipeTblHeader;
        var pipeRows;
        var pipesObj = this.state.pipes;
        if(pipesObj){
            pipeRows = createPipeRows(pipesObj);
            pipeTblHeader = (
                <Table striped hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Eval Str</th>
                      <th>OD</th>
                      <th>Size</th>
                    </tr>
                  </thead>
                    <tbody>
                        {pipeRows}
                    </tbody>
                </Table>
            );
        }
        return(
            <Container fluid={true}>
                <Row>
                    <Col /><Col xs={12} md={6}><h4>Shear Calculator</h4></Col><Col />
                </Row>
                <Row>
                    <Col xs={12}>
                    <ButtonToolbar>
                        <Button variant="success" className='m-2'>New</Button>
                        <Button disabled className='m-2'>Load</Button>
                    </ButtonToolbar>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8} >
                    <NewPanel title="Shearables">
                        <Form>
                            <Form.Group as={Row} controlId="tubeType">
                                <Col sm="2"><Form.Label>Type</Form.Label></Col>
                                <Col sm="8">
                                    <Form.Control as="select">
                                        <option>pipe</option>                        
                                        <option>casing</option>
                                        <option>tube</option>
                                        <option>wireline</option>
                                        <option>slickline</option>
                                        <option>e-line</option>
                                        <option>combo</option>
                                    </Form.Control>
                                </Col>
                                <Col />
                            </Form.Group>
                            <Row>
                                <Col sm="2">
                                <Form.Group controlId="strengthType">
                                    <Form.Control as="select" onChange={this.changeStrength}>
                                        <option value="yield">Yield Strength</option>                        
                                        <option value="grade">Grade</option>
                                        <option value="breaking">Breaking Strength</option>                        
                                    </Form.Control>
                                </Form.Group>
                                </Col>
                                <Col sm="8">                    
                                    <Form.Group controlId="Strength">
                                        <Form.Control type="text" value={this.state.strength} onChange={this.updateStrengthValue}/>
                                    </Form.Group>
                                </Col>
                                <Col sm="2">{this.state.strUnits}</Col>
                            </Row>
                            <Form.Group as={Row} controlId="elongation">
                                <Form.Label column sm="2">Elongation</Form.Label>
                                <Col sm="8">
                                <Form.Control type="text" />
                                </Col>
                                <Col sm="2">%</Col>
                            </Form.Group>
                            <Row>
                                <Col sm="2">
                                <Form.Group controlId="weightType">
                                    <Form.Control as="select">
                                        <option>Weight</option>                        
                                        <option>Wall thickness</option>                 
                                    </Form.Control>
                                </Form.Group>
                                </Col>
                                <Col sm="8">                    
                                    <Form.Group controlId="weight">
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm="2">ksi</Col>
                            </Row>
                            <Row>
                            <Col md="4"/>
                            <Col md="4"><Button variant="primary" type="submit" onClick={this.addShearable}>Add</Button></Col>
                            <Col md="4"/>
                            </Row>
                        </Form>
                    </NewPanel>
                    <NewPanel title="Well Conditions">x,y,z</NewPanel>
                    <NewPanel title="Rig Properties"><div>here's some text about rig properties</div><div>blah. blah. blah.</div></NewPanel>
                    </Col>
                    <Col md={4}>
                    <NewPanel title="Pipe to Evaluate">{pipeTblHeader}</NewPanel>
                    </Col>
                </Row>
            </Container>
    );
    };
};

export default ShearCalculator;
