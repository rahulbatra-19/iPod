import React from 'react';
import './Controls.css';


const Controls = (props) => {
    return (
        <div className='maincontrols' id='menu' onClick={props.onControlClick} >
            <button onClick={props.onScreenToggle} className='menu-button button'>MENU</button>
            <p>
            <span className='back-button' >
            <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/cccccc/rewind.png" alt="rewind"/>
            </span>
            <button className='middle-button button' onClick={props.selectedItem} ></button>
            <span className='forward-button' >
            <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/cccccc/fast-forward.png" alt="fast-forward"/>
            </span>
            </p>
            <span className='play-pause-button'>
            <img width="30" height="30" src="https://img.icons8.com/external-solid-kawalan-studio/24/cccccc/external-play-pause-user-interface-solid-kawalan-studio.png" alt="external-play-pause-user-interface-solid-kawalan-studio"/>
            </span>
        </div>
    )
}

export default Controls;
