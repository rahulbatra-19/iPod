import React from 'react';
import './Screen.css';


class Screen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // variable for left menu is visible
            isLeftVisible: props.isLeftVisible,
            // variable if any item is selected
            onscreen :props.onscreen
        };
    }
    componentDidUpdate(prevProps) {
        // Check if the onscreen prop is  changed 
        if(prevProps.onscreen !== this.props.onscreen){
            this.setState({
                isLeftVisible: !this.state.isLeftVisible,
                onscreen : this.props.onscreen
            });
        }
        // Check if the isLeftVisible prop has changed

        if (prevProps.isLeftVisible !== this.props.isLeftVisible) {
            this.setState({
                isLeftVisible: !this.state.isLeftVisible,
                onscreen : ''
            })
        }
    }
    render() {
        const { menuItems} = this.props;
        const {isLeftVisible, onscreen } = this.state;
        return (
            // this is the main screen div
        <div className='main'>
                {isLeftVisible ? (
                    // this is for left side of the screen to show the items of component 
                <div className="left">
                    <p>iPod.js</p>
                    <ul>
                        {menuItems.map(item => (
                            <li key={item.id} id={item.title}  >   
                                <span className='text'>{item.title}</span>
                                <span className='symbol'>></span>
                            </li>
                        ))}
                    </ul>
                </div>) :
                    (  
                        // this is if the component is selected
                         <div className='full'>
                            {/* if CoverFlow is selected */}
                            {onscreen==='CoverFlow' && 
                            <div className='full-func'>
                                <span>CoverFlow</span>
                            </div>}
                            {/* if Music is selected */}
                            {onscreen==='Music' &&
                            <div className='full-func' >
                                <p id="music">
                                    <img src="https://images.genius.com/cbad795cdb3843247073fac8af76b117.1000x1000x1.png"></img>
                                    <span>Sicko Mode <br></br>
                                        Travis Scott</span>
                                </p>
                                <div id="music-timeline">
                                0
                                <div id="music-time"></div>  
                                4:00   
                                </div>
                            </div>   
                            }
                            {/* if Games item  is selected */}

                            {onscreen==='Games' &&
                            <div className='full-func'>
                                <img src="https://toppng.com/uploads/preview/dice-115628871397usecbjyyw.png" alt="games"></img>
                                <p>Games</p>
                            </div>  
                            }
                            {/* if Setting item is selected */}
                            {onscreen==='Settings' &&
                            <div className='full-func'>
                                <img src="https://e7.pngegg.com/pngimages/516/751/png-clipart-computer-icons-setting-windows-настройки.png" alt="Settings"></img>
                                <p>Settings</p>
                            </div>  
                            }
                        </div>
                    ) 
                }
            </div>
            
        )
    }

}

export default Screen;
