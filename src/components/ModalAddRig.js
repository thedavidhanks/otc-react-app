import React, { Component } from 'react';
import firebase from 'firebase';

class ModalAddRig extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            owner: '',
            commDate: '',
            type: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        //console.log(name+" changed to "+value);
    }
    
    handleSubmit(event){
        event.preventDefault();
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const rigRef = db.collection("rigs").add({
            name: this.state.name,
            owner: this.state.owner,
            commDate: this.state.commDate,
            type: this.state.type
        });
        this.setState = {
            name: '',
            owner: '',
            commDate: '',
            type: ''
        };
        document.getElementById("addRigClose").click();
    }
    
    render(){
        return (
            <div className="modal fade modal-add-rig" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="addRig">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Rig</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="addRigClose">
                          <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form className="container" onSubmit={this.handleSubmit}>
                        <label className="row">
                            <span className="col-sm-6">Name:</span>
                            <input className="col-sm-6" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                        </label>
                        <label className="row">
                            <span className="col-sm-6">Owner:</span>
                            <input className="col-sm-6" type="text" name="owner"  value={this.state.owner} onChange={this.handleChange} />
                        </label>
                        <label className="row">
                            <span className="col-sm-6">Commission Date:</span>
                            <input className="col-sm-6" type="date" name="commDate"  value={this.state.commDate} onChange={this.handleChange} />
                        </label>
                        <label className="row">
                            <span className="col-sm-6">type:</span>
                            <input className="col-sm-6" type="text" name="type"  value={this.state.type} onChange={this.handleChange} />
                        </label>
                        <div className="row">
                        <button className="col btn btn-primary" type="submit">Save</button>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
      );
    }
};

export default ModalAddRig;
