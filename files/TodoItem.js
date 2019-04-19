import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {


  render() {

/*    getStyle = () => {*/
      //return {
        //background: '#c4c4c4',
        //padding: '10px',
        //borderBottom: '1px #000 dotted',
        //textDecoration: this.props.todo.completed ? 'line-through' : 'none'
      //}
    /*}*/


    //const { id, title } = this.props.todo
    
    return (
    
      <div style={{ backgroundColor: '#ccc' }}> 

      {/*<div style={this.getStyle()}>*/}

          <p>{this.props.todo}</p>

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

