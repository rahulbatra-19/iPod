import React from 'react';
import './Screen.css';
// import ZingTouch from 'zingtouch';

class Screen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLeftVisible: props.isLeftVisible,
            onscreen :props.onscreen
        };
    }
    componentDidUpdate(prevProps) {
        // Check if the isLeftVisible prop has changed
        if(prevProps.onscreen !== this.props.onscreen){
            this.setState({
                isLeftVisible: !this.state.isLeftVisible,
                onscreen : this.props.onscreen
            });
        }
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
        <div className='main'>
                {isLeftVisible ? (
                <div className="left">
                    <p>iPod.js</p>
                    <ul>
                        {menuItems.map(item => (
                            <li key={item.id} id={item.title}  >   
                                <span className='text'>{item.title}</span>
                                <span className='symbol' >></span>
                            </li>
                        ))}
                    </ul>
                </div>) :
                    (   <div className='full'>
                            {onscreen==='CoverFlow' && 
                            <div className='full-func'>
                                <span>CoverFlow</span>
                            </div>}
                            {onscreen==='Music' &&
                            <div className='full-func' >
                                <span>Music</span>
                            </div>   
                            }
                            {onscreen==='Games' &&
                            <div className='full-func'>
                                <img src="https://toppng.com/uploads/preview/dice-115628871397usecbjyyw.png" alt="games"></img>
                                <p>Games</p>
                            </div>  
                            }
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
