import React from 'react';
import styled from 'styled-components';
import { StyledAbout, StyledDescription } from '../styles';
import ScriptTag from 'react-script-tag';


const Demo = props => (
    <ScriptTag type="text/javascript" src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"/>
    )

export default function BackgroundSection() {
    return (
        <StyledFaq>
            <h2>My <span className='colored-text'>Background</span></h2>
            <StyledAccordionContainer>
                <StyledAccordionItem>
                    <StyledInput  type="checkbox" id="chck1"></StyledInput>
                    <StyledQuestion className='tab-lable' for="chck1">Item 1</StyledQuestion>
                    <StyledAnswer className="tab-content">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
                    </StyledAnswer>
                </StyledAccordionItem>
                <StyledAccordionItem>
                    <StyledInput type="checkbox" id="chck2"></StyledInput>
                    <StyledQuestion className='tab-lable' for="chck2">Item 2</StyledQuestion>
                    <StyledAnswer className="tab-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                    </StyledAnswer>
                </StyledAccordionItem>
            </StyledAccordionContainer>
        </StyledFaq>
    )
}
const StyledFaq=styled(StyledAbout)`
display: block;
h2{
    padding-bottom:2rem;
    font-weight: lighter;
}
`
const StyledInput=styled.input `
  position: absolute;
  opacity: 0;
  z-index: -1;
`
const StyledAccordionContainer=styled.div `
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0,0,0,0.5);
`
const StyledAccordionItem=styled.div `
    width: 100%;
    color: white;
    overflow: hidden;
    input:checked {
  + .tab-label {
    background: darken($midnight, 10%);
    &::after {
      transform: rotate(90deg);
    }
  }
  ~ .tab-content {
    max-height: 100vh;
    padding: 1em;
  }
}
`
const StyledQuestion=styled.label `
    display: flex;
    justify-content: space-between;
    padding: 1em;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        background: #b43030;
        color: white;
    }
    &::after {
      content: "\276F";
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all .35s;
    }


`
const StyledAnswer=styled.div`
    max-height: 0;
    padding: 0 1em;
    transition: all .35s;

`
