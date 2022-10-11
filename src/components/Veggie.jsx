import { useEffect, useState } from "react";
import React from "react";
// styled is to eliminate classes
import styled from "styled-components";
// splide does the carousel and splide slide select each image as the card
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

function Veggie() {
// We create a variable that is responsive with the UI setPopular is like the function that modifies popular
  const [veggie, setVeggie] = useState([]);
// We use useEffect to mount the function popularGet as soon as possible when we refresh the page. This is the reason 
useEffect(() => {
  veggieGet();
}, []);
/* the empty array is when we want to load the function when there are variables that are changing 
(for example in a search engine the search changes and we should mount another function that respect that.)
Its just a condition we are putting to reload the useEffect */

  const veggieGet = async () => {
    // checking if there is already something stored inside the local storage
    const checkingCache = localStorage.getItem("veggie");
    // if true then we parse (transform from string to array) the cache
    if(checkingCache) {
      setVeggie(JSON.parse(checkingCache));
      // if no local storage then we fetch the api and we set inside the local storage the array stringified inside popular our variable
    } else {
    // MAKE SURE THE API IS CALLED REACT_APP_SOMETHING because if not it will not work
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPESS_API}&number=9&tags=vegetarian`);
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    };
    }

// we are looping inside each recipe and give them the name recipe (just like a key)
  return (
    <div>
      <Wrap>
        <h3>Veggie picks</h3>
        <Splide 
          options={{
            pagination: false,
            perPage: 4,
            drag: "free",
            gap: '2rem'

          }}>
        {veggie.map((recipe) => {
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
  min-height: 18rem;
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
  p {
    position: absolute;
    color: transparent;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;
    transition: .3s;
  }
  p:hover {
    background-color: rgba(0, 0, 0, 0.331);
    color: white;
    transition: .3s
  }

`;

export default Veggie