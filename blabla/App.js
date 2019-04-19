// On importe la librairie :
import React from 'react';

//.. ou via destructuration :
//import React, { Component } from 'react';

// Import des composants nécessaire :
import Todos from './Components/Todos';


// STRUCTURE D'UN COMPOSANT CLASSE 
// -------------------------------

class App extends React.Component {
//class App extends Component {

  // State Object
  state = {
    
    // On encode d'abord en dur..
    todos: [
      {
        id: 1, 
        title: "faire les courses",
        completed: false,
      },
      {
        id: 2,
        title: "workshop",
        completed: false
      },
      {
        id: 3,
        title: "ranger",
        completed: false
      },
    ]
  }


  render() {

    // On peut aussi le voir via dev tools
    console.log(this.state.todos)

    return (
    
      <div className="App">
 
        <Todos todos={this.state.todos} />
      
      </div>
    )
  }
}

