import React, {Component} from 'react';
import './App.css';
import Membre from './components/Membre';
import Presentation from './components/Presentation';
import Button from './components/button';

const famille = {
  membre1: {
    nom: 'Trinity',
    age: 41
  },
  membre2: {
    nom: 'Morpheus',
    age: 42
  },
  membre3: {
    nom: 'Modificated',
    age: 3
  }
}

class App extends Component {
  state = {
    famille
  }
// handle pour les evenement. quand on clique sur le button alors console log est declenché
// ...this.state.famille recupere l'état, ajoute un an au click, passe par la fonction setState pour modifier l'état 
  handleClick = (num) => {
    const famille = {...this.state.famille};
    famille.membre1.age += num;
    famille.membre2.age += 1;
    famille.membre3.age += 2;
    this.setState({famille});
  }

  handleChange = (event) => {
    const famille = {...this.state.famille};
    const nom = event.target.value;
    const age = event.target.value;
    console.log(nom);
    famille.membre1.nom = nom;
    famille.membre1.age = age;
    this.setState({famille});
  }

  render() {
    const {famille} = this.state;
    return (
      <div className="App">
        <h1>React</h1>
        <input value={famille.membre1.nom} onChange={this.handleChange} type='text '></input>
        <input value={famille.membre1.age} onChange={this.handleChange} type='text '></input>
        <Membre 
          nom={famille.membre1.nom}
          age={famille.membre1.age} />
        <Membre 
          nom={famille.membre2.nom}
          age={famille.membre2.age} />
        <Membre 
          nom={famille.membre3.nom}
          age={famille.membre3.age} />
        
        <Membre nom="Props">
          <strong>Je suis un props children en gras</strong>
        </Membre>
        <Presentation />
       <Button 
          vieillir={() => this.handleClick(5)}
       />
      </div>
    );
  }
}

export default App;
