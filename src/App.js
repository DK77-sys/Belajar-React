import React from 'react';
import Murid from './components/murid/Murid';
import MuridCreate from './components/murid/MuridCreate';
import './App.css';


class App extends React.Component{
  
  constructor(){
    super();

    this.state = {
      name: "Ahmad Nad"
    }

  }

  render() {
    return (
      <div className="App">
        <Murid />
      </div>
    )
  }

}

export default App;
