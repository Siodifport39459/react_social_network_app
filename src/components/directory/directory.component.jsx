import React from 'react';
import image from '../../assets/image1.png'
import './directory.styles.scss'


const Directory= () => {
    return(
        
        <div className='heading'>
            <h1 className='greeting'>Welcome!! Here You Can Meet Your Friends..</h1>
        <div className='directory'>
        <img src={image} alt='picture' className='img'/>
        </div>

        </div>
        

    );
    
}
export default Directory;