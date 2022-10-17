import styled from 'styled-components'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
// useNavigate to link the text to the page with the correct :search
import { useNavigate } from 'react-router-dom'
// useStare to store the word we search, set the value to the input and on change we set the function to what we are typign inside
// so we are refreshing the variable with the function and giving the input.
// now we run an event listener to let it store after we enter what we typed. Before we just used the NavLink to do that
function Search() {
    const [input, setInput] = useState("");
    let navigate = useNavigate();
    // handler to not make the enter button submit after pressing it. Because if we do we loose the content inside of it.
    const submitHandler = (e) => {
        navigate('/search/' + input);
        e.preventDefault();
    };
  return (
    <StyledForm onSubmit={submitHandler}>
        <div>
            <FaSearch/>
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
        </div>
    </StyledForm>
  )
}
// make sure that there is the styled.form and not div because otherwise it will not work.
const StyledForm = styled.form`
    margin: 1rem 10rem;

    div {
        position: relative;
        width: 100%;
    }

    input {
        background-color: black;
        color: white;
        outline: none;
        border: none;
        border-radius: 1rem;
        padding: 1rem 3rem;
        width: 100%;
        font-size: 1.1rem;

    }
    svg {
        position: absolute;
        color: white;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%)
    }
`

export default Search