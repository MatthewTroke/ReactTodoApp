import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList'

require("./reset.css");
require("./index.css");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    }
  }

  moveTask = (index, action) => {
    this.setState((prevState, props) => {
      let tasks = prevState.tasks;
      let b = tasks[index];
      if (action === "up" && index !== 0) {
        tasks[index] = tasks[index - 1];
        tasks[index - 1] = b;
      } else if (action === "down" && index !== tasks.length - 1) {
        tasks[index] = tasks[index + 1];
        tasks[index + 1] = b;
      } else {
        return { tasks }
      }
      return { tasks };
    });
  }


  removeTask = (index) => {
    this.setState({
      tasks: this.state.tasks.filter((_, i) => {
        return index !== i
      })
    })
  }

  addTask = (arg) => {
    this.setState({
      tasks: [...this.state.tasks, arg]
    })
  }

  render() {
    return (
      <div className="container" >
        <div className="row add-margin">
          <div className="col s12 m12 l12">
            <div className="card">
              <div className="card-content">
                <TaskForm addTask={this.addTask} />
                <TaskList tasks={this.state.tasks} removeTask={this.removeTask} moveTask={this.moveTask} />
              </div>
            </div>
          </div>
        </div>
        <p className="center-align font">Created by: Matthew Troke</p>
      </div>
      
    );
  }
}


ReactDOM.render(<App />, document.getElementById('App'));

