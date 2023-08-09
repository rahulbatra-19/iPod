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
      onscreen: '',
    }
    var screenmain="";
  }
  // this is to handing the color of items 
  handleColor =()=>{
    let div = document.getElementById('CoverFlow');
    if(div){
      div.style.backgroundColor='whitesmoke';
      div.style.color="black";
    }
   
    div = document.getElementById('Music');
    if(div){
      div.style.backgroundColor='whitesmoke';
      div.style.color="black";
    }
    div = document.getElementById('Games');
    if(div){
      div.style.backgroundColor='whitesmoke';
      div.style.color="black";
    }
    div = document.getElementById('Settings');
    if(div){
      div.style.backgroundColor='whitesmoke';
      div.style.color="black";
    }
}
// this is a function of Selecting the menu items
  handleControlClick = () => {
    let angle = 0;
    // this is to select the target element and using Zing touch on it for selecting the component
    const target = document.getElementById('menu');
    const region = new ZingTouch.Region(target);
    // binding target to the rotate
    region.bind(target, 'rotate', (e) => {

      angle = angle + e.detail.distanceFromLast;
      // this is for hovering over items and focus goes on items and changing color of background 
      if ((Math.abs(angle) > 0 && Math.abs(angle) < 20)) {
        this.handleColor();
        let curEle = document.getElementById('CoverFlow');
        if(curEle){
        curEle.style.backgroundColor = '#0099FF';
        curEle.style.color = "white";
        }
          this.screenmain= "CoverFlow";

      }
      if (Math.abs(angle) > 15 && Math.abs(angle) < 35) {
        this.handleColor();
        let curEle = document.getElementById('Music');
         if(curEle){
          curEle.style.backgroundColor = '#0099FF';
          curEle.style.color = "white";
          }
          this.screenmain=  "Music";

      }
      if (Math.abs(angle) > 30 && Math.abs(angle) < 50) {
        this.handleColor();
        let curEle = document.getElementById('Games');

        if(curEle){
          curEle.style.backgroundColor = '#0099FF';
          curEle.style.color = "white";
          }
          this.screenmain= "Games";
      }
      if (Math.abs(angle) >= 45 && Math.abs(angle) < 65) {
        this.handleColor();
        let curEle = document.getElementById('Settings');

        if(curEle){
          curEle.style.backgroundColor = '#0099FF';
          curEle.style.color = "white";
          }
          this.screenmain="Settings";
      }

      if (Math.abs(angle) > 65) {
        angle = 0;
      }
    })
  }
  // this is the function for the menu button to show the menu of the component on screen
  handleScreenToggle = () => {
    this.setState((prevState) => ({
      isLeftVisible: !prevState.isLeftVisible,
    }));
  }
  // this is the function for the main middle button to select the screen component
  handleSelectedItem = () =>{
    this.setState({
      onscreen : this.screenmain,
    })
  }

  render() {
    const { menuItems, isLeftVisible, onscreen } = this.state;
    return (
      <div className="App">
        {/* this is the Screen part of the Ipod */}
        <Screen menuItems={menuItems} 
        isLeftVisible={isLeftVisible} 
        onscreen ={onscreen} 
        />
        {/* this the controller part of the Ipod */}
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