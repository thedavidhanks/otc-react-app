import React, { Component } from 'react';
import { Card, CardColumns, Button } from 'react-bootstrap';
import IconGas from '../img/icons/gasCalculator.png';

class Tools extends Component {
    render(){
        return (
            <div className='col-sm'>
                <div className='container'>
                    <div className='row'><h2 className='col'>Engineering Tools</h2></div>
                    <div className='row'>
                        <div className='col'>
                        <CardColumns>
                            <ExampleCard img={IconGas} title="Gas State Calculator">A simple calculator for determining various gas properties given some condition</ExampleCard>
                            <ExampleCard title="Accumulator Report">Size accumulators for a BOP system and produce a report</ExampleCard>
                            <ExampleCard title="BOP Shear Verification Report">Generate a shear verification pacakge for a BOP setup with a variety of tubing configurations.</ExampleCard>
                            <ExampleCard title="New Module">Just a nother modules to do cool things and make life easier</ExampleCard>
                        </CardColumns>
                        </div>
                    </div>
                </div>
            </div>
      );
    }
};

const ExampleCard = (props) => (
    <Card>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.children}
            </Card.Text>
            <Button variant="primary">BAM!</Button>
        </Card.Body>
    </Card>
);
export default Tools;
