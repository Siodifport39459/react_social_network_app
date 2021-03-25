import React from 'react';
import image from '../../assets/image1.png'
import './directory.styles.scss'


const Directory= () => {
    return(
        
        <div className='heading'>
           
        <div className='directory'>
        <img src={image} alt='picture' className='img'/>
        </div>

        </div>
        

    );
    
}
export default Directory;