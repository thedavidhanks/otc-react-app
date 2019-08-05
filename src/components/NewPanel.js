import React from 'react';

const NewPanel = (props) =>{
    return(
        <div className="new-panel">
            <div className="new-panel-title"><h4>{props.title}</h4></div>
            <div className="new-panel-content">{props.children}</div>
        </div>
    );
};

export default NewPanel;