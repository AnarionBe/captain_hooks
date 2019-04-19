import React, { Component } from 'react';
import Header from './Components/layout/Header';
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(), 
        title: "préparer un workshop",
        completed: true
      },
      {
        id: uuid.v4(),
        title: "dormir",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Oublier de me lever",
        completed: false
      },
    ]
  }

  addTodo =(title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  toggleCompletion = (id) => {
    console.log('Greeting from App.js !');
    console.log(id);
    this.setState({
        todos: this.state.todos.map(todo => {
          if(todo.id === id) {
            todo.completed = !todo.completed
           }
          return todo;
        })
    });
  }

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]      
    })      
  }          
   

  render() {
    //console.log(this.state.todos);
    return (      
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} toggleCompletion={this.toggleCompletion} delTodo={this.delTodo} />
        </div>      
      </div>
    );
  }
}

export default App;
