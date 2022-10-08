import { useEffect } from "react";
import React from "react";
function Popular() {
// We use useEffect to mount the function popularGet as soon as possible when we refresh the page. This is the reason 
useEffect(() => {
  popularGet();
}, []);
/* the empty array is when we want to load the function when there are variables that are changing 
(for example in a search engine the search changes and we should mount another function that respect that.)
Its just a condition we are putting to reload the useEffect */

  const popularGet = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.RECIPESS_API}&number=9`);
    const data = await api.json();
    console.log(data);
  };

  

  return (
    <div>Popular</div>
  )
}

export default Popular