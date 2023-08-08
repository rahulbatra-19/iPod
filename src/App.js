import React from 'react';
import './App.css';
import Controls from './Controls';
import Screen from './Screen';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      menuItems : [
        {
          id:  1,
          title: 'Cover Flow'
        },
        {
          id:  2,
          title: 'Music'
        },
        {
          id:  3,
          title: 'Games'
        },
        {
          id:  4,
          title: 'Settings'
        }
      ],
      isLeftVisible : false
    }
  }
  handleScreenToggle = () => {
    this.setState((prevState) => ({
      isLeftVisible: !prevState.isLeftVisible,
    }));
  }
  render(){
    const {menuItems, isLeftVisible} = this.state;
  return (
    <div className="App">
     <Screen menuItems={menuItems} isLeftVisible={isLeftVisible} />
        <Controls onScreenToggle={this.handleScreenToggle} />
    </div>
  );
  }
}

export default App;