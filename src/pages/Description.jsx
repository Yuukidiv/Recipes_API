import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

function Description() {
    let params = useParams();
    const [recipeDetails, setRecipeDetails] = useState({});

    const fetchingData = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_RECIPESS_API}`);
        const detailData = await data.json();
        setRecipeDetails(detailData)
    };
    useEffect(() => {
        fetchingData();
    }, [params.name]);

  return (
    <BigDiv>
        <div>
            <h2>{recipeDetails.title}</h2>
            <img src={recipeDetails.image}/>
        </div>
        <Info>
            <Button>Instructions</Button>
            <Button>Ingredients</Button>
        </Info>
    </BigDiv>
  )
}
const BigDiv = styled.div`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;

.active {
    background: black;
    color: white;
}
h2 {
    margin-bottom: 2rem;
}
li {
    font-size: 1.2rem;
    line-height: 2.5rem;
}
ul {
    margin-top: 2.5rem;
}

`;

const Button = styled.button`
padding: 1rem 2rem;
color: black;
background: white;
border: 2px solid black;
margin-right:2rem;
font-weight: 600;
border-radius: .7rem;

:hover {
    background: black;
    color: white;
}
`;
const Info = styled.div`
margin-right: 10rem;
`;


export default Description