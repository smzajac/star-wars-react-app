import React from 'react';
import {Card, CardBlock, CardTitle} from 'reactstrap';

export default class Vehicles extends React.Component {

  render(){
    return (
      <div className = "col-md-4" >
             <div className="card" >
              <div className="card-block">
                 <h3 className="card-title">Vehicle: {this.props.name}</h3>
                 <p className="card-subtitle mb-2 text-muted">Model:{this.props.model}</p>
              <div className="card">
                <div className="card-block">
                  <p className="card-subtitle mb-2 text-muted">Specs</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Manufacturer: {this.props.manufacturer} </li>
                    <li className="list-group-item">Class:{this.props.vehicle_class} </li>
                    <li className="list-group-item">Passengers: {this.props.passengers}</li>
                    <li className="list-group-item">Crew: {this.props.crew}</li>
                    <li className="list-group-item">Length: {this.props.length}</li>
                    <li className="list-group-item">Max Speed: {this.props.max_atmosphering_speed}</li>
                    <li className="list-group-item">Cargo Capacity: {this.props.cargo_capacity}</li>
                 </ul>
                </div>
               </div>
              </div>
             </div>

           < /div>
    )
  }
}
