import React, {Component} from 'react';
import './App.css';
import Membre from './components/Membre';
//import Presentation from './components/Presentation';
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
    famille,
    isShow: false
  }
    // handle pour les evenement. quand on clique sur le button alors console log est declenché
    // ...this.state.famille recupere l'état, ajoute un an au click, passe par la fonction setState pour modifier l'état 
    handleClick = num => {
      const famille = {...this.state.famille};
      famille.membre1.age += num;
      this.setState({famille});
    }

    handleChange = (event, id) => {
      const famille = {...this.state.famille};
      const nom = event.target.value;
      famille[id].nom = nom;
      this.setState({famille});
    }

    cacheNom = id => {
      const famille = { ...this.state.famille}
      famille[id].nom = 'XXX'
      this.setState({ famille })
    }

    handleShowDescription = () => {
      // ! permet de renvoyer toujours l'inverse
      const isShow = !this.state.isShow
      this.setState({ isShow })

    }
    render() {
      const { titre } = this.props
      const {famille, isShow } = this.state

      let description = null

      if (isShow) {
        description = <strong>Je suis un props children en gras </strong>
      }

      const liste = Object.keys(famille)
      .map(membre => (
        <Membre 
            key={membre}
            handleChange={event => this.handleChange(event, membre)}
            cacheNom={() => this.cacheNom(membre)}
            nom={famille.[membre].nom}
            age={famille.[membre].age} />

      ))
      console.log (liste)
      return (
        <div className="App">
           <h1>{titre}</h1>
          
            {liste} 
          <Membre nom="Props">
            { description }
            <button onClick={this.handleShowDescription}>
            {
              isShow ? 'Cacher' : 'Montrer'
            } 
            </button>
          
          </Membre>
         {/* <Presentation /> */} 
        <Button 
            vieillir={() => this.handleClick(1)}
        />
        </div>
      );
    }
  }

export default App;
