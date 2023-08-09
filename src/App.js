import React from 'react';
import './App.css';
import Controls from './Controls';
import Screen from './Screen';
import ZingTouch from 'zingtouch';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuItems: [
        {
          id: 1,
          title: 'CoverFlow'
        },
        {
          id: 2,
          title: 'Music'
        },
        {
          id: 3,
          title: 'Games'
        },
        {
          id: 4,
          title: 'Settings'
        }
      ],
      isLeftVisible: false,
      screenmain: ''
    }
  }
  handleColor =()=>{
    let div = document.getElementById('CoverFlow');
    div.style.backgroundColor='whitesmoke';
    div.style.color="black";
    div = document.getElementById('Music');
    div.style.backgroundColor='whitesmoke';
    div.style.color="black";
    div = document.getElementById('Games');
    div.style.backgroundColor='whitesmoke';
    div.style.color="black";
    div = document.getElementById('Settings');
    div.style.backgroundColor='whitesmoke';
    div.style.color="black";
}
  handleControlClick = () => {
    let angle = 0;
    const target = document.getElementById('menu');
    const region = new ZingTouch.Region(target);
    region.bind(target, 'rotate', (e) => {

      angle = angle + e.detail.distanceFromLast;
      if ((Math.abs(angle) > 0 && Math.abs(angle) < 20)) {
        this.handleColor();
        let curEle = document.getElementById('CoverFlow');
        if(curEle){
        curEle.style.backgroundColor = '#0099FF';
        curEle.style.color = "white";
        }
      }
      if (Math.abs(angle) > 15 && Math.abs(angle) < 35) {
        this.handleColor();
        let curEle = document.getElementById('Music');
         if(curEle){
          curEle.style.backgroundColor = '#0099FF';
          curEle.style.color = "white";
          }
      }
      if (Math.abs(angle) > 30 && Math.abs(angle) < 50) {
        this.handleColor();
        let curEle = document.getElementById('Games');

        if(curEle){
          curEle.style.backgroundColor = '#0099FF';
          curEle.style.color = "white";
          }
      }
      if (Math.abs(angle) >= 45 && Math.abs(angle) < 65) {
        this.handleColor();
        let curEle = document.getElementById('Settings');

        if(curEle){
          curEle.style.backgroundColor = '#0099FF';
          curEle.style.color = "white";
          }
      }

      if (Math.abs(angle) > 65) {
        angle = 0;
      }
    })
  }

  handleScreenToggle = () => {
    this.setState((prevState) => ({
      isLeftVisible: !prevState.isLeftVisible,
    }));
  }
  handleSelectedItem = () =>{

  }

  render() {
    const { menuItems, isLeftVisible, screenmain } = this.state;
    return (
      <div className="App">
        <Screen menuItems={menuItems} isLeftVisible={isLeftVisible} screenmain={screenmain} />
        <Controls
          onScreenToggle={this.handleScreenToggle}
          onControlClick={this.handleControlClick}
          selectedItem = {this.handleSelectedItem}
        />
      </div>
    );
  }
}

export default App;