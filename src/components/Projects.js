import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import MockProjects from '../img/mock/jobs.png';

class Projects extends Component {
    render(){
        return (
            <div className='col-sm'>
                
                <div className='container'>
                    <div className='row'><h2 className='col'>Projects</h2></div>
                    <div className='row'>
                        <Image src={MockProjects} />
                    </div>
                </div>
            </div>
      );
    }
};

export default Projects;
