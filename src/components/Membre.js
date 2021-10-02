// importer React dans les composants
import React, { Fragment } from 'react';

// Fonction fléché Choisi si Pas d'état (State)(plus simple, plus lisible, ) // fonction classique */
const Membre = ({ nom, age, children }) => {
        // javascript dans le jsx pour récuperer une variable avec un nom + methode pour mettre en majuscule
        //si children existe affiche <p> sinon fragment vide 
return(
        <Fragment>
            <h2 style={{
                    backgroundColor: age < 42 ? 'red' : 'green',
                     color: age < 40 ? 'white' : 'black'
                     }}>
                             Membre : {nom.toUpperCase()} : {age} ans </h2>
            {children ? <p>{children}</p> : <Fragment />}       
        </Fragment>
      )
}

export default Membre;