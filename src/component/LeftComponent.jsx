import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} size="lg"/>

const LeftComponent = ()=>{
    return(
        <div className="leftComponent">
            <div>
            helo world

            {element}
            </div>
        
        </div>
    )
}


export default LeftComponent;