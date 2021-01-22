import React from 'react';
import './style.css'
import LeftComponent from './LeftComponent'
import CenterComponent from './CenterPage';


const LadingPage = ()=>{
    return(
        <div className='container-fluid row p-0'>
        <LeftComponent/>
        <CenterComponent/>
        </div>
    )
}


export default LadingPage;