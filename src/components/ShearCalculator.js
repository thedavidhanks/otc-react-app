import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import NewPanel from './NewPanel.js';
import PipesTable from './PipesTable.js';
import SamplePipes from '../test/SamplePipes.js'  //loaded to test pipes

function parentTubeType(childTube){
    var parentTube;
    switch(childTube){
        case 'pipe':
        case 'tube':
        case 'casing':
            parentTube = 'tube';
            break;
        case 'wireline':
        case 'eline':
        case 'slickline':
            parentTube = 'line';
            break;
        case 'combo':
            parentTube = 'combo';
            break;
        default:
            parentTube = null;
            break;
    }
    return parentTube;
};
    
class ShearCalculator extends Component{
    constructor(props){
        super(props);
        this.defaultFormState = {
            strUnits: 'ksi',
            strength: '',
            strengthType: 'yield',
            weightType: 'wall',
            weightUnits: 'in',
            tubeType: 'pipe',
            elongation: '',
            newOD: '',
            strengthFieldHidden: false,
            odFieldHidden: false,
            elongationFieldHidden: false,
            weightWallFieldHidden: false,
            comboFieldHidden: true,
            ysDisabled: false,
            gradeDisabled: false,
            bsDisabled: true,
            comboBoxes: new Map()  
        };
        this.state = {
            ...this.defaultFormState    //holds the state of the combo boxes { value: 'combo1', id: 1, checked: false }, { value: 'combo2', id: 2, checked: false }, 
        };
        //Below is a temporary pipes object for testing.
        this.state.pipes = SamplePipes; //[];
        this.state.pipes.map( (pipe) => this.state.comboBoxes.set(pipe.id, false) );
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
    }
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
    onTubeTypeChange = (event) => {
        //determine if type is line,tube, or combo
        var parTubeType = parentTubeType(event.target.value);
        this.setState( {tubeType: event.target.value});
        
        //console.log(tubeType);
        switch(parTubeType){
            case 'line':
                //if it's a line, select breaking strength type, disable other strenghts, hide elongatioin, hide weight/wall, hide combo selection
                this.setState({
                   strengthFieldHidden: false,
                   odFieldHidden: false,
                   elongationFieldHidden: true,
                   weightWallFieldHidden: true,
                   comboFieldHidden: true,
                   strengthType: 'breaking',
                   strUnits: 'kips',
                   ysDisabled: true,
                   gradeDisabled: true,
                   bsDisabled: false
                });
                break;
            case 'tube':
                //if it's a tube, disable breaking strength, select yield strength, show elongatioin, show weight/wall, hide combo selection
                this.setState({
                   strengthFieldHidden: false,
                   odFieldHidden: false,
                   elongationFieldHidden: false,
                   weightWallFieldHidden: false,
                   comboFieldHidden: true,
                   strengthType: 'yield',
                   strUnits: 'ksi',
                   ysDisabled: false,
                   gradeDisabled: false,
                   bsDisabled: true,
                   weightType: 'wall',
                   weightUnits: 'in'
                });
                break;
            case 'combo':
                //if it's a combo, hide strengths, hide elongation, hide weight/wall, show combo selection
                this.setState({
                   strengthFieldHidden: true,
                   odFieldHidden: true,
                   elongationFieldHidden: true,
                   weightWallFieldHidden: true,
                   comboFieldHidden: false
                });
                break;
            default:
                break;
        }
       
        
    }
    addShearable = (event) => {
        event.preventDefault();
        //Do some error checking
        
        //create a new pipe object
        var addNewPipe = {};
        var newId = this.state.pipes.length+1;
        switch(this.state.tubeType){
            case 'pipe':
            case 'tube':
            case 'casing':
                addNewPipe = {
                id: newId,
                type: this.state.tubeType,
                OD: this.state.newOD,
                elongation: this.state.elongation,
                //wall: 0.25,
                //ppf: 19.5,
                strType: 'yield',
                strength: this.state.strength
                };
                break;
            case 'wireline':
            case 'eline':
            case 'slickline':
                addNewPipe = {
                id: newId,
                type: this.state.tubeType,
                strength: this.state.strength,
                OD: this.state.newOD
                };
                break;
            case 'combo':
                //Get an array of the checkboxes selected.
                let comboArray = [];
                for( let [key, value] of this.state.comboBoxes ){
                    if(value){ comboArray.push(key); }
                }
                addNewPipe = {
                id: newId,
                type: this.state.tubeType,
                combine: comboArray.sort()
                };
                break;
            default:
                break;
        }
        this.setState({
            pipes: [
                ...this.state.pipes,
                addNewPipe
            ],
            ...this.defaultFormState
        });
        //create an empty checkbox
        this.setState(prevState => ({ comboBoxes: prevState.comboBoxes.set(addNewPipe.id, false) }));

        //return all the previous checkboxes to empty.
        //this.state.comboBoxes.forEach( (value, key) => {this.state.comboBox.set(key, false)} ) );
        //this.state.pipes.map( (pipe) => this.state.comboBoxes.set(pipe.id, false) );
        console.log(JSON.stringify(this.state.pipes));
    }
    onFormSubmit = (e) => {
        e.preventDefault();
    }
    handleComboChange = (e) => {
        const itemNo = parseInt(e.target.name);
        const isChecked = e.target.checked;
        this.setState(prevState => ({ comboBoxes: prevState.comboBoxes.set(itemNo, isChecked) }));
    }
    render(){    
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
                                    <Form.Control as="select" value={this.state.tubeType} onChange={this.onTubeTypeChange}>
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
                            { !this.state.strengthFieldHidden ? 
                            <Row>
                                <Col sm="3">
                                <Form.Group controlId="strengthType">
                                    <Form.Control as="select" onChange={this.onStrengthChange} value={this.state.strengthType}>
                                        <option value="yield" disabled={this.state.ysDisabled}>Yield Strength</option>                        
                                        <option value="grade" disabled={this.state.gradeDisabled}>Grade</option>
                                        <option value="breaking" disabled={this.state.bsDisabled}>Breaking Strength</option>                        
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
                            </Row> : 
                            null
                            }
                            { !this.state.odFieldHidden ? 
                            <Form.Group as={Row} controlId="outsideDiameter">
                                <Form.Label column sm="3">OD</Form.Label>
                                <Col sm="8">
                                <Form.Control type="text" value={this.state.newOD} onChange={(e) => this.setState({newOD: e.target.value})}/>
                                </Col>
                                <Col sm="1">in</Col>
                            </Form.Group> :
                            null 
                            }
                            { !this.state.elongationFieldHidden ? 
                            <Form.Group as={Row} controlId="elongation">
                                <Form.Label column sm="3">Elongation</Form.Label>
                                <Col sm="8">
                                <Form.Control type="text" value={this.state.elongation} onChange={(e) => this.setState({elongation: e.target.value})}/>
                                </Col>
                                <Col sm="1">%</Col>
                            </Form.Group> :
                            null
                            }
                            { !this.state.weightWallFieldHidden ? 
                            <Row>
                                
                                <Form.Group as={Col} sm="3" controlId="weightType">
                                    <Form.Control as="select" onChange={this.onWeightChange} value={this.state.weightType}>
                                        <option value="weight">Weight</option>                        
                                        <option value="wall">Wall thickness</option>                 
                                    </Form.Control>
                                </Form.Group>                  
                                <Form.Group  as={Col} sm="8" controlId="weightWall">
                                    <Form.Control type="text" value={this.state.weight} onChange={ (e) => this.setState({weight: e.target.value})}/>
                                </Form.Group>
                                <Col sm="1">{this.state.weightUnits}</Col>
                            </Row> :
                            null
                            }
                            {!this.state.comboFieldHidden ?
                            <Row>
                                <Form.Group  as={Col} md="12">
                                    {this.state.pipes.map(pipe => (
                                    <Form.Check inline label={pipe.id} type="checkbox" name={pipe.id} id={`combo-${pipe.id}`} key={`combo-${pipe.id}`} checked={this.state.comboBoxes.get(pipe.id)} onChange={this.handleComboChange}/>))}
                                </Form.Group>
                            </Row>: 
                            null}
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
                        <NewPanel title="Shearables to Evaluate">
                            <PipesTable type="tube" pipes={this.state.pipes} />
                            <PipesTable type="line" pipes={this.state.pipes} />
                            <PipesTable type="combo" pipes={this.state.pipes} />
                        </NewPanel>
                    </Col>
                </Row>
            </Container>
    );
    };
};

export default ShearCalculator;
