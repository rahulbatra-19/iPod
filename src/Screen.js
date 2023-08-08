import React from 'react';
import './Screen.css';
import { render } from '@testing-library/react';

class Screen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title : '',
            screen: true,
            img:'',
            isLeftVisible : props.isLeftVisible
        };
        // console.log(this.state.isLeftVisible);
    }



    change=(title)=>{
        this.setState({
            isLeftVisible: !this.state.isLeftVisible
        });
        // console.log(this.state.isLeftVisible);

        // console.log(screen);
        console.log(title)
        var img = '';
        if(title==='Cover Flow'){
            this.setState({
                screen: false,
                title: 'Cover Flow'
                });
        }else if(title === 'Music'){
            this.setState({
                screen: false,
                title: 'Music'
                });
        }else if(title === 'Games'){
            this.setState({
                screen: false,
                img:"https://toppng.com/uploads/preview/dice-115628871397usecbjyyw.png",
                title: 'Games'
                });
        }else if(title === 'Settings'){
            this.setState({
                screen: false,
                img:"https://e7.pngegg.com/pngimages/516/751/png-clipart-computer-icons-setting-windows-настройки.png",
                title: 'Settings'
                });
        }
    }
    componentDidUpdate(prevProps) {
        // Check if the isLeftVisible prop has changed
        if (prevProps.isLeftVisible !== this.props.isLeftVisible) {
            this.setState({
                isLeftVisible : !this.state.isLeftVisible,
                screen : true
            })
            // Perform actions based on the prop change
            // You can include logic here that should run when the div is clicked
        }
    }

    render(){
        {console.log('porps', this.props.isLeftVisible)}
    const {menuItems, } = this.props;
    const {title , screen, img,isLeftVisible} = this.state;
    {console.log("state",this.state.isLeftVisible ,"     /n");}
    return (
        <div className='main'>
            {   isLeftVisible ? (   <div className="left" style={isLeftVisible ? { display: 'block' } : { display: 'none' }}>
                            <p>iPod.js</p>
                            <ul> 
                                 {menuItems.map(item => (
                                    <li key={item.id} onClick={()=> this.change(item.title)}> 
                                        <span className='text'>{item.title}</span>  
                                        <span className='symbol' >></span>
                                    </li>
                                ))}
                                 </ul>
                        </div>): !screen?
                        (
                            <div className='full'>
                          {img==''?(<span>{title}</span> )
                        :(<><img src={img} alt={title}></img><p>{title}</p></>)
    
                }
                </div>
            ) :(<></>)
                     
    }
        </div>
    )
}

} 

export default Screen;
