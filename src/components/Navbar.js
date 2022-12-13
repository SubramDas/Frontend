import React from 'react'
import styled from 'styled-components'
import { menuData } from '../data/Data'

const Navbar = () => {
  return (
    <Nav>
        <NavLeft>
            <Logo1>
                <Line1></Line1>
                <Line2></Line2>
                <Line3></Line3>
                <Line4></Line4>
            </Logo1>
            <Logo2>
                <Line11></Line11>
                <Line22></Line22>
                <Line33></Line33>
                <Line44></Line44>
            </Logo2>
            {menuData.map((item, index)=>(
                <NavMenuLinks to={item.link} key={index}>
                    {item.title}
                </NavMenuLinks>
            ))}
        </NavLeft>
        <NavRight>
            <Live>
                Try Live for free
            </Live>
            <Account>
                Account
            </Account>
            <Log>
                Log out
            </Log>
        </NavRight>
    </Nav>
  )
}

const Nav=styled.nav`
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #cdb9b9;
`

const NavLeft=styled.div`
    width: 70vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: auto;
    justify-content: flex-start;
    margin: 1vh 1vw;
`
const Logo1=styled.div`
    transform: rotate(90deg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Logo2=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const Line1=styled.span`
    width: 1.5vw;
    height: 0.5vh;
    background-color: black;
    margin: 2px 2px;

`
const Line2=styled.span`
    width: 1.5vw;
    height: 0.5vh;
    background-color: black;
    margin: 2px 2px;
`
const Line3=styled.span`
    width: 1.5vw;
    height: 0.5vh;
    background-color: black;
    margin: 2px 2px;
`

const Line4=styled.span`
    width: 1.5vw;
    height: 0.5vh;
    background-color: black;
    margin: 2px 2px;
`
const Line11=styled.span`
    width: 1.5vw;
    height: 0.35vh;
    background-color: black;
    margin: 2px 2px;

`
const Line22=styled.span`
    width: 1.5vw;
    height: 0.35vh;
    background-color: black;
    margin: 2px 2px;
`
const Line33=styled.span`
   width: 1.5vw;
    height: 0.35vh;
    background-color: black;
    margin: 2px 2px;
`

const Line44=styled.span`
    width: 1.5vw;
    height: 0.35vh;
    background-color: black;
    margin: 2px 2px;
`


const NavMenuLinks=styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 2vw;
`
const NavRight=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1vh 1vw;
`
const Live=styled.h3`
    margin-right: 2vw;
    color: darkblue;

`
const Account=styled.h3`
    margin-right: 2vw;
`
const Log=styled.h3`
    margin-right: 2vw;
`


export default Navbar
