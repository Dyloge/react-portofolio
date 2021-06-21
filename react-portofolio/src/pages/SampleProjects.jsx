import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FirstGif from '../image/FirstGif.gif';
import SecondGif from '../image/SecondGif.gif';
import ThirdGif from '../image/ThirdGif.gif';
import ForthGif from '../image/ForthGif.gif';

export default function SampleProjects() {
    return (
        <StyledSamples>
            <StyledSample>
                <StyledSampleTitle>Project1</StyledSampleTitle>
                <StyledLine></StyledLine>
                <Link>
                    <StyledSampleImage src={FirstGif} alt="first gif"/>
                </Link>
            </StyledSample>
            <StyledSample>
                <StyledSampleTitle>Project2</StyledSampleTitle>
                <StyledLine></StyledLine>
                <Link>
                    <StyledSampleImage src={SecondGif} alt="second gif" />
                </Link>
            </StyledSample>
            <StyledSample>
                <StyledSampleTitle>Project3</StyledSampleTitle>
                <StyledLine></StyledLine>
                <Link>
                    <StyledSampleImage src={ThirdGif} alt="third gif" />
                </Link>
            </StyledSample>
            <StyledSample>
                <StyledSampleTitle>Project4</StyledSampleTitle>
                <StyledLine></StyledLine>
                <Link>
                    <StyledSampleImage src={ForthGif} alt="forth gif" />
                </Link>
            </StyledSample>  
        </StyledSamples>
    )
}

const StyledSamples= styled.div `
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 2rem;
    

`
const StyledSample = styled.div `
    padding-bottom: 10rem;
`
const StyledSampleTitle=styled.h1 `
    padding: 1rem 0rem;

`
const StyledLine=styled.div `
    height: 1 rem;
    background: #b43030;
    margin-bottom: 3rem;

`
const StyledSampleImage=styled.img `
    width: 100%;
    height: 70vh;
    object-fit: cover;
`
