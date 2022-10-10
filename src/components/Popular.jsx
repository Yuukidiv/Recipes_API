import { useEffect, useState } from "react";
import React from "react";
// styled is to eliminate classes
import styled from "styled-components";
// splide does the carousel and splide slide select each image as the card
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

function Popular() {
// We create a variable that is responsive with the UI setPopular is like the function that modifies popular
  const [popular, setPopular] = useState([]);
// We use useEffect to mount the function popularGet as soon as possible when we refresh the page. This is the reason 
useEffect(() => {
  popularGet();
}, []);
/* the empty array is when we want to load the function when there are variables that are changing 
(for example in a search engine the search changes and we should mount another function that respect that.)
Its just a condition we are putting to reload the useEffect */

  const popularGet = async () => {
    // MAKE SURE THE API IS CALLED REACT_APP_SOMETHING because if not it will not work
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPESS_API}&number=9`);
    const data = await api.json();
    setPopular(data.recipes);
  };

  
// we are looping inside each recipe and give them the name recipe (just like a key)
  return (
    <div>
      <Wrap>
        <h3>Popular picks</h3>
        <Splide 
          options={{
            pagination: false,
            perPage: 4,
            drag: "free",
            gap: '2rem'

          }}>
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Cards>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
              </Cards>
            </SplideSlide>
          )
        })}
        </Splide>
      </Wrap>
    </div>
  )
}

// Using the package styled components to create and style things without using classes or whatever
const Wrap = styled.div`
margin: 4rem 0 rem;
`;

const Cards = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
`;


export default Popular

// back ticks ``