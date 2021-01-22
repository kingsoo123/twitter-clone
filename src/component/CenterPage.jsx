import React from 'react';
import './style.css';
import coutinho from '../images/coutinho.jpg'


const CenterComponent = () => {
    return(
        <>
        <div className="centerComponent">
            <div className="content-head">
            <h3 style={{textAlign: 'start', width: '50%', marginLeft: '10px'}}>Home</h3>
            <h3 style={{textAlign: 'end', width: '50%', marginRight: '10px'}}> About</h3>
            </div>

            <div>
                <div style={{display: 'flex', margin: '10px'}}>
                    <img style={{borderRadius: '50%'}} alt='' src={coutinho} width='50px' height='50px' />
                    <p style={{textAlign: 'center', fontSize: '20px', whiteSpace: 'pre-wrap', margin: '10px 10px 10px 10px', color: 'grey'}}>What's happening?</p>
                </div>

                <div>
                    <div style={{float: 'left', display: 'flex', justifyContent: 'space-around'}}>
                        <span><p>jfjffj</p></span>
                         <span><p>jfjffj</p></span>
                        
                    </div>
                    <button 
                    style={{borderRadius: '15px', backgroundColor: 'lightskyblue', float: 'right', margin: '0px 10px 0px 0px',
                    color: 'white', border: 'white', width:'60px', height: '30px'}}>Tweet</button>
                </div>

            </div>
        </div>
        </>
    )
}


export default CenterComponent;