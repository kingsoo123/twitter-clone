import React from 'react';
import '../style.css';
import Head from './Head';
import Tweet from './Tweet';


const CenterComponent = () => {
    return(
        <>
        <div className="centerComponent">
         <Head />
         <br/>
         <br />
         <Tweet />
           
        </div>

        </>
    )
}


export default CenterComponent;