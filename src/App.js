import Categories from "./components/Categories";
import Pages from "./pages/Pages"
import Search from "./components/Search";
import styled from "styled-components"; 
import { Link } from "react-router-dom";
import { GiKnifeFork } from 'react-icons/gi';

// we imported here browserRouter because it is used by home and page so instead of addressing it 2 times we import it here a higher level
// browserRouter enables us to navigate between pages
import { BrowserRouter } from  "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar>
        <GiKnifeFork />
        <Logo to={"/"}>Recipe Api</Logo>
      </Navbar>
      <Search />
      <Categories />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
color: black;
font-size: 1.5rem;
font-weight; 400;
font-family; 'Quicksand', cursive;`;


const Navbar = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;

svg {
  font-size: 2rem;
}

`;

export default App;
