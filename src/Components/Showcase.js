import React from 'react';
import image3 from '../assaets/image3.jpg';
import  '../css/main.css';
export const Showcase = () => {
    return (
        
        <section className="Showcase">
        <div className="overlay">
        <img src={image3} alt=" "/>
        <h1>Our World</h1>
        <p>Welcome to our World</p>
        </div>
        </section>     
    
    )
}
export default Showcase
