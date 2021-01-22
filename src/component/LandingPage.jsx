import React from 'react';
import './style.css'
import LeftComponent from './LeftComponent'
import CenterComponent from './CenterPage';


const LadingPage = ()=>{
    return(
        <div className='container'>
        <LeftComponent/>
        <div className='centerComponent'>
        <CenterComponent/>
        </div>
        <div className="rightCoomponent">

        </div>
        </div>
    )
}


export default LadingPage;