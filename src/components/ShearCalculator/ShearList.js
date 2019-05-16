import React from 'react';
import { connect } from 'react-redux';

import NewPanel from '../NewPanel.js';
import PipesTable from './PipesTable';
import { deletePipe } from '../../actions';

const ShearList = (props) => {
    return (    
        <NewPanel title="Shearables to Evaluate (redux)">
            <PipesTable type="tube" pipes={props.pipes} delShearable={props.deletePipe}/>
            <PipesTable type="line" pipes={props.pipes} delShearable={props.deletePipe} />
            <PipesTable type="combo" pipes={props.pipes} delShearable={props.deletePipe} />
        </NewPanel>
    );
};

const mapStateToProps = (state) => {
    return { pipes: state.pipes } ;
};
export default connect(mapStateToProps, {deletePipe} )(ShearList);



