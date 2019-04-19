// On importe la librairie :
import React from 'react';

// Déclaration de la fonction :
function Header() {

  // Retourne une grappe JSX 
  return (
    
        <header style={headerStyle}>
      
            <h1>TodoList</h1>
          
        </header>
    )
}

// 
const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default Header    
