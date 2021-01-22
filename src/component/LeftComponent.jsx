import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser } from '@fortawesome/free-solid-svg-icons'


const LeftComponent = ()=>{
    return(
        <div className="leftComponent">
        <div style={{width: 200}}>   
                <span className='menuFirst'>
                    <FontAwesomeIcon icon={faTwitter} size="1x" color="#1DA1F2"/>
                </span>   
                <span className='menuItems'>
                    <FontAwesomeIcon icon={faHome} size="1x"/>
                    <h3 style={{marginLeft: 20}}>Home</h3>
                </span> 
                <span className='menuItems'>
                    <FontAwesomeIcon icon={faHashtag} size="1x"/>
                    <h3 style={{marginLeft: 20}}>Explore</h3>
                </span>
                <span className='menuItems'>
                    <FontAwesomeIcon icon={faBell} size="1x"/>
                    <h3 style={{marginLeft: 20}}>Notifications</h3>
                </span>
                <span className='menuItems'>
                    <FontAwesomeIcon icon={faEnvelope} size="1x"/>
                    <h3 style={{marginLeft: 20}}>Messages</h3>
                </span> 
                <span className='menuItems'>
                    <FontAwesomeIcon icon={faBookmark} size="1x"/>
                    <h3 style={{marginLeft: 20}}>Bookmarks</h3>
                </span> 
                <span className='menuItems'>
                    <FontAwesomeIcon icon={faList} size="1x"/>
                    <h3 style={{marginLeft: 20}}>Lists</h3>
                </span>
                <span className='menuItems'>
                    <FontAwesomeIcon icon={faUser} size="1x"/>
                    <h3 style={{marginLeft: 20}}>Profile</h3>
                </span> 
                <span className="tweet">
                    <strong>Tweet</strong>
                </span>  




                <span className='profileMenu'>
                    <div style={{width: 50, height: 50, backgroundColor:'red', borderRadius:'50%'}}></div>
                    <div style={{marginLeft: 10}}>
                    <strong style={{color:'black'}}>#weMove</strong>
                    <p>@watch-kinsoo</p>
                    </div>
                </span>           
            </div>
        
        </div>
    )
}


export default LeftComponent;