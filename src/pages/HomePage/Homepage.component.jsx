import React from 'react';
import './HomePage.styles.scss';
import Directory from '../../components/directory/directory.component'


const HomePage = () => {
    return(
        <div className='homepage'>
             {/* eslint-disable-next-line*/}
             <Directory/>
            {/*<p>Hello! Connect with your Friends..</p>
        <img src={dummyImg} alt='the dummy image' className='image'/>*/}
        </div>
        

    );
   
    
}
export default HomePage;