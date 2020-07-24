import React from 'react';
import Lottie from 'react-lottie';
import Animation from '../../assets/animations/404-3.json';


export default () => {
    const options = {
        loop: true,
        autoplay: true,
        prerender:true,
        animationData: Animation
    }
    
    return (
        <div>
            <Lottie options={options}/>
        </div>
        
    )
    
}