import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class PilotForm extends Component{
  render(){
    return(
      <div className="card form">
            <div className="card-block">
              <h2 className="card-title">What is your name, pilot?</h2>
              <form onSubmit={this.props.handleSubmit}>
                <div className="form-group">
                  <input className="form-control col-md-4 offset-md-4" id="pilotName"  name="name" type="text" placeholder="Enter your name" onChange={this.props.handleNameChange} value={this.props.name} />
                </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
              </form>
              <h4>{this.props.value}</h4>
            </div>
            </div>
    )

  }

}
