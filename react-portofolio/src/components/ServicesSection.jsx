import React from "react";
import lottie from "lottie-web";
import reactLogo from "../image/react-reddish.json";
import jsLogo from "../image/javascript-reddish.json";
import htmlLogo from "../image/html.png";
import cssLogo from "../image/css.png";
import sassLogo from "../image/sass.png";
import bootstrapLogo from "../image/bootstrap.png";
import dragDrop from "../image/codingguy.json";
import styled from 'styled-components';
import { StyledAbout, StyledDescription } from '../styles';

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
          container: document.querySelector("#animation"),
          animationData: dragDrop,
        });
      }, []);


      



    return (
        <div>
            <StyledServices>
                <StyledDescription>
                    <h2>Skills, <span>up to now</span></h2>
                    <StyledCards>
                        <StyledCard>
                            <div>                            
                                <div className="icon" id = 'react-logo' style={{ width: 50, height: 50 }}></div>
                                <h3>React</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </StyledCard>
                        <StyledCard>
                            <div>                            
                                <div className="icon" id = 'js-logo' style={{ width: 50, height: 50 }}></div>
                                <h3>Javascript</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </StyledCard>
                        <StyledCard>
                            <div className="icon">
                                <StyledIcon className='htmlLogo'src={htmlLogo} alt="html logo"/>
                                <h3>Html</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </StyledCard>
                        <div className="card">
                            <div className="icon" >
                                <StyledIcon src={cssLogo} alt="css logo"/>
                                <h3>Css</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>                        
                        <StyledCard>
                            <div className="icon" >
                                <StyledIcon src={sassLogo} alt="html logo"/>
                                <h3>Sass</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </StyledCard>
                        <StyledCard>
                            <div className="icon" >
                                <StyledIcon src={bootstrapLogo} alt="html logo"/> 
                                <h3>Bootstrap</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </StyledCard>
                    </StyledCards>
                    <div id = 'animation'></div>
                </StyledDescription>
            </StyledServices>
        </div>
    )
}


const StyledIcon = styled.img`
    filter: invert(23%) sepia(76%) saturate(1629%) hue-rotate(337deg) brightness(94%) contrast(95%);
    width: 50px;
    height: 50px;
`
const StyledServices = styled(StyledAbout)`
h2 {
    padding-bottom: 5rem;
    }
p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}
`
const StyledCards = styled.div `
 display: flex;
 flex-wrap: wrap;
`
 const StyledCard = styled.div `
 display: flex;
 align-items: center;
 `


