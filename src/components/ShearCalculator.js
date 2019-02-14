import React, { Component } from 'react';
import { ButtonToolbar, Button, Table } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import NewPanel from './NewPanel.js';
import PipeRows from './PipeRow.js';

/*function createPipeRows(Obj){
    var pipeRows = [];
    for(var pipe in Obj){
        pipeRows.push(<PipeRow pipe={Obj[pipe]} />);
    }
    return pipeRows;
}
*/
class ShearCalculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            strUnits: 'ksi',
            strength: '',
            strengthType: 'yield',
            weightUnits: 'in',
            tubeType: 'pipe',
            elongation: ''
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
            },{
                id: 3,
                type: 'casing',
                OD: 16,
                wall: 0.2,
                ppf: 25,
                strType: 'grade',
                strength: 85
            },{
                id: 4,
                type: 'wireline',
                OD: .75,
                strType: 'breaking',
                strength: 35
            }     
        ];
    };
    onStrengthChange = (event) => {
        var strengthType = event.target.value;
        this.setState({strengthType});
        switch(strengthType){
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
    onWeightChange = (event) => {
        var weightType = event.target.value;
        this.setState({weightType});
        switch(weightType){
            case 'weight':
                this.setState({weightUnits: 'ppf'});
                break;
            default:
            case 'wall':
                this.setState({weightUnits: 'in'});
                break;
        }
    }
    addShearable = (event) => {
        event.preventDefault();
        console.log("strength: "+ this.state.strength);
    }
    onFormSubmit = (e) => {
        e.preventDefault();
    }
    render(){
        let pipeTblHeader;
        var pipesObj = this.state.pipes;
        if(pipesObj){
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
                  <PipeRows sort="tube" pipes={pipesObj}/>
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
                        <Form onSubmit={this.onFormSubmit}>
                            <Form.Group as={Row} controlId="tubeType">
                                <Col sm="3"><Form.Label>Type</Form.Label></Col>
                                <Col sm="8">
                                    <Form.Control as="select" value={this.state.tubeType} onChange={e => this.setState( {tubeType: e.target.value})}>
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
                            <Row>
                                <Col sm="3">
                                <Form.Group controlId="strengthType">
                                    <Form.Control as="select" onChange={this.onStrengthChange} value={this.state.strengthType}>
                                        <option value="yield">Yield Strength</option>                        
                                        <option value="grade">Grade</option>
                                        <option value="breaking">Breaking Strength</option>                        
                                    </Form.Control>
                                </Form.Group>
                                </Col>
                                <Col sm="8">                    
                                    <Form.Group controlId="Strength">
                                        <Form.Control 
                                            type="text" 
                                            value={this.state.strength} 
                                            onChange={(e) => this.setState({strength: e.target.value})}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm="1">{this.state.strUnits}</Col>
                            </Row>
                            <Form.Group as={Row} controlId="elongation">
                                <Form.Label column sm="3">Elongation</Form.Label>
                                <Col sm="8">
                                <Form.Control type="text" value={this.state.elongation} onChange={(e) => this.setState({elongation: e.target.value})}/>
                                </Col>
                                <Col sm="1">%</Col>
                            </Form.Group>
                            <Row>
                                <Col sm="3">
                                <Form.Group controlId="weightType">
                                    <Form.Control as="select" onChange={this.onWeightChange} value={this.weightType}>
                                        <option value="weight">Weight</option>                        
                                        <option value="wall">Wall thickness</option>                 
                                    </Form.Control>
                                </Form.Group>
                                </Col>
                                <Col sm="8">                    
                                    <Form.Group controlId="weight">
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm="1">{this.state.weightUnits}</Col>
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
