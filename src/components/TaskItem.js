import React, { Component } from 'react';


class TaskItem extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-content valign-wrapper">
          <div className="col s10 m12 l13">
            <p>{this.props.task}</p>
          </div>
          <button onClick={() => { this.props.removeTask(this.props.id)}} className="waves-effect waves-light btn red center-align col l3 m4 s6">Delete</button>
          <i onClick={() => {this.props.moveTask(this.props.id, "up")}} className="material-icons col l1 m1 s1 pointer center-align">arrow_upward</i>
          <i onClick={() => {this.props.moveTask(this.props.id, "down")}}className="material-icons col l1 m1 s1 no-padding pointer center-align">arrow_downward</i>
        </div>
      </div>
    );
  }
}


export default TaskItem;