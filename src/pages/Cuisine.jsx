import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// this is for the animation
import { motion } from 'framer-motion'
// useParamns helps us get the type in the headers like the italian or whatever food
import { Link, useParams } from 'react-router-dom'
// we have created a new page, here we have to fetch the items so we fetch and all of that.
// because we want the site to be interactive we fetch in our api based in the name into the cuisine
// we use and useEffect to where we get our head type using the package params, so in the bracket we put our params.type, which means that everytime it changes, we mount the new function with the new type name.
function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPESS_API}&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type]);

    return <Grid>
        {cuisine.map((item) => {
            return (
            <Card key={item.id}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
            </Card>
            )
        })}

        </Grid>
}

const Grid = styled.div`    
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
`;
const Card = styled.div`
    img {
        width:100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`


export default Cuisine