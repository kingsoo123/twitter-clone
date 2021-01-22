import '../style.css'
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import coutinho from '../../images/coutinho.jpg'

const coff = <FontAwesomeIcon icon={faStarHalfAlt} />



const Tweet = () => {
    return(
        <>
        
        <div>
                <div style={{display: 'flex', margin: '10px'}}>
                    <img style={{borderRadius: '50%'}} alt='' src={coutinho} width='50px' height='50px' />
                    <p style={{textAlign: 'center', fontSize: '20px', whiteSpace: 'pre-wrap', margin: '10px 10px 10px 10px', color: 'grey'}}>What's happening?</p>
                </div>

                <div>
                    <div style={{float: 'left', display: 'flex', marginLeft: '9%'}}>
                        <p style={{paddingRight: '15px', color: 'lightskyblue'}}>{coff}</p>
                        <p style={{paddingRight: '15px', color: 'lightskyblue'}}>{coff}</p>
                        <p style={{paddingRight: '15px', color: 'lightskyblue'}}>{coff}</p>
                        <p style={{paddingRight: '15px', color: 'lightskyblue'}}>{coff}</p>
                        <p style={{color: 'lightskyblue'}}>{coff}</p>
                        
                    </div>
                    <button 
                    style={{borderRadius: '15px', backgroundColor: 'lightskyblue', float: 'right', margin: '0px 10px 0px 0px',
                    color: 'white', border: 'white', width:'60px', height: '30px'}}>Tweet</button>
                </div>

            </div>
        </>
    );
}

export default Tweet;