import React from 'react';
import Amir from '../image/Amir Najafi.jpg'

export default function AboutSection() {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                       <h2><span>Self-education</span> is, I firmly believe,</h2> 
                    </div>                    
                    <div className="hide">
                        <h2>the only kind of education there is.</h2>
                    </div>                    
                    <div className="hide">
                        <h2>Isaac Asimov</h2>
                    </div>
                </div>
                <p>Hire me for front-end web developing</p>
                <button>Contact Me</button>
            </div>
            <div className="image">
                <img src={Amir} alt="Amir Najafi" />
            </div>
        </div>
    )
}
