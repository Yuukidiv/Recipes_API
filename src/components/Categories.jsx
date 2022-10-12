import styled from "styled-components";
import {FaHamburger} from "react-icons/fa"
import {GiSushis} from "react-icons/gi"
// connection the icons to their respective path
import { NavLink } from "react-router-dom"

function Categories() {
  return (
    <Navbar>
      <NavLink>
      <FaHamburger />
        <h4>American Food</h4>
      </NavLink>
      <NavLink>
        <GiSushis />
        <h4>Japanese</h4>
      </NavLink>

    </Navbar>
  )
}

const Navbar = styled.div`
display: flex;
align-items: center;
`

export default Categories