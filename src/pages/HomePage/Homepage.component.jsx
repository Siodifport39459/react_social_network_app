import React from 'react';
import './HomePage.styles.scss';
import Directory from '../../components/directory/directory.component'


const HomePage = () => {
    return(
        <div className='homepage'>
             {/* eslint-disable-next-line*/}
             <p className='greeting'>Hello! Connect with your Friends..</p>
             <Directory/>
        </div>
        

    );
   
    
}
export default HomePage;