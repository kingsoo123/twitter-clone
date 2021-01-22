import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'


const LeftComponent = ()=>{
    return(
        <div className="leftComponent">
            <div>      
                <FontAwesomeIcon icon={faTwitter} size="2x"/>
                <span style={{width: 150, display: 'flex', flexDirection:'row', justifyContent:'space-between', marginTop: 30,}}>
                    <FontAwesomeIcon icon={faHome} size="2x"/>
                    <p>hello world</p>
                </span>            
            </div>
        
        </div>
    )
}


export default LeftComponent;