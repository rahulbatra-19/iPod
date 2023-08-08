import React from 'react';
import './Controls.css';

const Controls = ({onScreenToggle}) => {
    const show =()=>{

    }
    return (
        <div className='maincontrols'>
            <button onClick={onScreenToggle} className='menu-button button'>MENU</button>
            <p>
            <button className='back-button button'>
            <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/cccccc/rewind.png" alt="rewind"/>
            </button>
            <button className='middle-button button'></button>
            <button className='forward-button button'>
            <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/cccccc/fast-forward.png" alt="fast-forward"/>
            </button>
            </p>
            <button className='play-pause-button button'>
            <img width="30" height="30" src="https://img.icons8.com/external-solid-kawalan-studio/24/cccccc/external-play-pause-user-interface-solid-kawalan-studio.png" alt="external-play-pause-user-interface-solid-kawalan-studio"/>
            </button>
        </div>
    )
}

export default Controls;
