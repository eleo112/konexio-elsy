import React from 'react';
import Person from './components/Person';

const MIN_TEMPERATURE = -20;
// const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
// const MAX_HEART = 180;
const MIN_STEP = 0;
// const MAX_STEP = 50000;

class App extends React.Component {
  render() {
    return (
      <div className="containerFluid">
        <Person />
        <p>Battements de coeur: {MIN_HEART}</p>
        <p>Température: {MIN_TEMPERATURE}</p>
        <p>Nombre de pas: {MIN_STEP}</p>
      </div>
    );
  }
}

export default App;
