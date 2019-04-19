import React, { Component } from 'react';
/*import TodoItem from './TodoItem';  */
//import PropTypes from 'prop-types';

class Todos extends Component {
  
  render() {
    
    return this.props.todos.map((todo) => (
      
      <h3>{todo.title}</h3>

      //<TodoItem todo={todo} />

      //<TodoItem key={todo.id} todo={todo} />

      //<TodoItem key={todo.id} todo={todo} toggleCompletion={this.props.toggleCompletion} delTodo={this.props.delTodo} /> 
    
    ));
  }
}

//Todos.popTypes ={
  //todos: PropTypes.array.isRequired
//}


export default Todos

