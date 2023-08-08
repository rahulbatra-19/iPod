import React from 'react';
import './App.css';
import Controls from './Controls';
import Screen from './Screen';


class App extends React.Component {
  constructor(){
    super();
  }
  render(){
  return (
    <div className="App">
      <Screen />
      <Controls />
    </div>
  );
  }
}

export default App;