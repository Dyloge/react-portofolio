import React from "react";
import lottie from "lottie-web";
import reactLogo from "../image/react.json";
import jsLogo from "../image/javascript.json";
import htmlLogo from "../image/html.png";
import cssLogo from "../image/css.png";
import sassLogo from "../image/sass.png";
import bootstrapLogo from "../image/bootstrap.png";
import dragDrop from "../image/drag&drop.json";


export default function ServicesSection() {
    React.useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#react-logo"),
          animationData: reactLogo,
        });
      }, []);
    React.useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#js-logo"),
          animationData: jsLogo,
        });
      }, []);
      React.useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#drag-drop"),
          animationData: dragDrop,
        });
      }, []);


      



    return (
        <div>
            <div className="services">
                <div className="description">
                    <h2>Skills, <span>up to now</span></h2>
                    <div className="cards">
                        <div className="card">
                            <div>                            
                                <div className="icon" id = 'react-logo' style={{ width: 50, height: 50 }}></div>
                                <h3>React</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="card">
                            <div>                            
                                <div className="icon" id = 'js-logo' style={{ width: 50, height: 50 }}></div>
                                <h3>Javascript</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={htmlLogo} alt="html logo"style={{ width: 50, height: 50 }}/>
                                <h3>Html</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="card">
                            <div className="icon" >
                                <img src={cssLogo} alt="css logo"style={{ width: 50, height: 50 }}/>
                                <h3>Css</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>                        
                        <div className="card">
                            <div className="icon" >
                                <img src={sassLogo} alt="html logo"style={{ width: 50, height: 50 }}/>
                                <h3>Sass</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="card">
                            <div className="icon" >
                                <img src={bootstrapLogo} alt="html logo"style={{ width: 50, height: 50 }}/> 
                                <h3>Bootstrap</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div id = 'drag-drop'></div>
                </div>
            </div>
        </div>
    )
}


