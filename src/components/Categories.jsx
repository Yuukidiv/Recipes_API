import styled from "styled-components";
import {FaHamburger} from "react-icons/fa"
import {GiSushis} from "react-icons/gi"
// connection the icons to their respective path
import { NavLink } from "react-router-dom"

function Categories() {
  return (
    <Navbar>
      <StyledBall to={"/cuisine/American"}>
      <FaHamburger />
        <h4>American</h4>
      </StyledBall>
      <StyledBall to={"/cuisine/Thai"}>
        <GiSushis />
        <h4>Thai</h4>
      </StyledBall>
      <StyledBall to={"/cuisine/Italian"}>
        <GiSushis />
        <h4>Italian</h4>
      </StyledBall>
    </Navbar>
  )
}

const Navbar = styled.div`
display: flex;
align-items: center;
justify-content: center;

`
// styling a specific component, inside we put all the design, while we can select the other elements inside it. 
// There is also the .active when you click on something and the :hover SOOO GOOOD
const StyledBall = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
margin-right: 1rem;
align-items: center;
border-radius: 50%;
width: 6rem;
height: 6rem;
background-color: black;
cursor: pointer;
text-decoration: none;
transform: scale(0.7);
transition: .3s;

  h4 {
    color: white;

  } 
  svg {
    color: white;
    font-size:1.5rem;
  }
  &.active {
    background-color: orange;

  }
  :hover {
    background-color: orange;
    transition: .3s;
  }

`

export default Categories