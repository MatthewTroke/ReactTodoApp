import React, { Component } from 'react';


class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleClick = () => {
    this.props.addTask(this.state.value);
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <div className="card-action valign-wrapper" >
        <div className="input-field col s12 m12 l12">
          <input onChange={this.handleChange} value={this.state.value} id="task" type="text" className="validate"></input>
          <label htmlFor="first_name">Task</label>
        </div>
        <button onClick={this.handleClick} className="waves-effect waves-light btn col l3">Add Task</button>
      </div>
    );
  }
}

export default TaskForm;