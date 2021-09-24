import React from 'react';
import image1 from '../assaets/image1.jpg';
import image2 from '../assaets/image2.jpg';
import image4 from '../assaets/image4.jpg';
import  "../css/main.css";
const Destinations = () => {
    return (
          <div>
            <section className="grid">
            <h3>We are currently in 8 countries!</h3>
            <div className="grid-items">
            <div>
            <img src={image1} alt="./assaets/image1.jpg"/>
            <h4>suite</h4>
            <p>feels as comfortable as your home</p>
            </div>
            
            <div>
            <img src={image2} alt="./assaets/image2.jpg"/>
            <h4>pool</h4>
            <p>make yourself comfortable and relax</p>
            </div>
            <div>
            <img src={image4} alt="./assaets/image4.jpg"/>
            <h4>Delux</h4>
            <p>Make yourself at home</p>
            </div>
            </div>
            </section>
        </div>    
    
    )
}

export default Destinations
