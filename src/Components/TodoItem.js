import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#c4c4c4',
      padding: '10px',
      borderBottom: '1px #000 dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  //toggleCompletion(e) {
  //  console.log(this.props);  
  //}
  // ==> dans ce cas onChange={this.toggleCompletion.bind(this)}

  // ON VA REMONTER CETTE FONCTION POUR POUVOIR MODIFIER LE SATE (COMPONENTS DRILLING)
  //toggleCompletion = (e) => {
  //  console.log(this.props);  
  //}
  // onChange={this.toggleCompletion}

  render() {
    const { id, title } = this.props.todo
    return (
      <div style={this.getStyle()}>
        {/*        
        <p>
          <input type="checkbox" onChange={this.props.toggleCompletion.bind(this, this.props.todo.id)} /> {' '}
            { this.props.todo.title }
          <button style={btnStyle}>x</button>
        </p>
        */}
        <p>
          <input type="checkbox" onChange={this.props.toggleCompletion.bind(this, id)} /> {' '}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
  color: '#fff',
  border: 'none',
  paddinng:  '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
