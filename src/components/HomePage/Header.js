import React from 'react';
import Bounce from 'react-reveal/Bounce';
import styled from 'styled-components';
import BackImage from '../../images/h.jpg'

function Header() {
    return (
        <HeroWrapper>
        <div className="inside-container">
        <div className="hero-text">
            <Bounce left duration={3000}>
            <h1>I'm looking for the unexpected</h1>
            </Bounce>
             <Bounce right duration={3000}>
            <h1>I'm looking form things i've never unexpected</h1>
            </Bounce>
        </div>
        </div>
        </HeroWrapper>
    )
}

export default Header

const HeroWrapper=styled.header`
min-height:60vh;
 background: linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)),
 url(${BackImage}) center/cover no-repeat;
  background-attachment: fixed;
display:flex;
align-items:center;
margin-top:-70px;
width:100%;
overflow:hidden;

.hero-text{
    min-height:inherit;
    margin:0 auto;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center
}
.hero-text h1{
    font-size:12px;
    text-transform:uppercase;
    margin:5px;
    padding:5px;
    font-weight:400;
    background:rgba(58,66,71,0.9);
}

@media screen and (min-width:880px){
    min-height:100vh;
    .hero-text h1{
        font-size:28px;
    }
}









`