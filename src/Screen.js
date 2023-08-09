import React from 'react';
import './Screen.css';
// import ZingTouch from 'zingtouch';

class Screen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            screen: true,
            img: '',
            isLeftVisible: props.isLeftVisible,
            mainscreen : props.screenmain
        };
    }
   

    change = (title) => {
        this.setState({
            isLeftVisible: !this.state.isLeftVisible
        });
        console.log(title)
        var img = '';
        if (title === 'CoverFlow') {
            this.setState({
                screen: false,
                img : '',
                title: 'CoverFlow'
            });
        } else if (title === 'Music') {
            this.setState({
                screen: false,
                img : '',
                title: 'Music'
            });
        } else if (title === 'Games') {
            this.setState({
                screen: false,
                img: "https://toppng.com/uploads/preview/dice-115628871397usecbjyyw.png",
                title: 'Games'
            });
        } else if (title === 'Settings') {
            this.setState({
                screen: false,
                img: "https://e7.pngegg.com/pngimages/516/751/png-clipart-computer-icons-setting-windows-настройки.png",
                title: 'Settings'
            });
        }
    }
    componentDidUpdate(prevProps) {
        // Check if the isLeftVisible prop has changed
        if (prevProps.isLeftVisible !== this.props.isLeftVisible) {
            this.setState({
                isLeftVisible: !this.state.isLeftVisible,
                screen: true
            })
        }
    }
    render() {
        const { menuItems, } = this.props;
        const { title, screen, img, isLeftVisible } = this.state;

        return (
            <div className='main'>
                {isLeftVisible ? (<div className="left" style={isLeftVisible ? { display: 'block' } : { display: 'none' }}>
                    <p>iPod.js</p>
                    <ul>
                        {menuItems.map(item => (
                            <li key={item.id} id={item.title}  >   
                                <span className='text'>{item.title}</span>
                                <span className='symbol' >></span>
                            </li>
                        ))}
                    </ul>
                </div>) : !screen ?
                    (
                        <div className='full'>
                            {img ==='' ? (<span>{title}</span>)
                                : (<><img src={img} alt={title}></img><p>{title}</p></>)

                            }
                        </div>
                    ) : (<></>)

                }
            </div>
        )
    }

}

export default Screen;


//onClick={() => this.change(item.title)}