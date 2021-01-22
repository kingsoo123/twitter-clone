import React from 'react';
import './style.css'
import LeftComponent from './LeftComponent'


const LadingPage = ()=>{
    return(
        <div className='container-fluid row p-0'>
        <LeftComponent/>
        <div className='centerComponent'>

        </div>
        <div className="rightComponent">

        </div>
        </div>
    )
}


export default LadingPage;