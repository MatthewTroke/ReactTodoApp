import React, { Component } from 'react';
import TaskItem from './TaskItem';


class TaskList extends Component {


  printTasks() {
    console.log(this.props.tasks);
  }

  render() {
    const tasks = this.props.tasks
    return (
      <div>
        {tasks.map((task, index) => {
          return <TaskItem task={task} key={index} id={index} removeTask={this.props.removeTask} moveTask={this.props.moveTask}/>
        })}
      </div>
    );
  }
}


export default TaskList;
