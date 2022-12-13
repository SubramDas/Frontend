import React from 'react'
import styled from 'styled-components'
import Imageone from "../images/image.jpg"

const Hero = () => {
  return (
    <>
      <HeroPage>
        <Written>
            <About>About</About>
            <Jobs>Jobs</Jobs>
        </Written>
        <ImageFont>
            <Image src={Imageone}></Image>
            <Topic>Ableton</Topic>
        </ImageFont>
      </HeroPage>
    </>
  )
}

const HeroPage=styled.div`
    width: 100vw;
    height: 90vh;
`
const Written=styled.div`
    width: 100vw;
    height: 10vh;
    display: flex ;
    align-items: center;
    justify-content: flex-start;
`
const About=styled.h2`
    margin: 1vh 1vw;
    color: orange;

`

const Jobs=styled.h2`
    margin: 1vh 1vw;
`

const ImageFont=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 70vh; 
    position: relative;
`

const Image=styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 80%;
    height: auto;
`
const Topic=styled.h1`
    z-index: 20;
    position: absolute;
    color: wheat;
    font-size: 100px;
`


export default Hero
