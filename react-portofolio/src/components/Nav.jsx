import React from 'react';
import styled from 'styled-components';

export default function Nav() {
    return (
        <div>
            <StyledNav>
                <h1>
                    <a id= 'logo' href="#">Amir Najafi</a>
                </h1>
                <ul>
                    <li><a href="#"></a>About Me</li>
                    <li><a href="#"></a>Sample Projects</li>
                    <li><a href="#"></a>My Future</li>
                </ul>
            </StyledNav>
            
        </div>
    )
}
const StyledNav=styled.nav `
min-height:10vh;
display:flex;
margin:auto;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
background-color: #313131;
a{
    color:white;
    text-decoration: none;
}
ul {
    display:flex;
    list-style: none;
}
#logo {
    font-family: 'Gruppo', cursive;

}
li {
    padding-left: 5rem;
    position: relative;
}




`
