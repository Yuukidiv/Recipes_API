import { useEffect } from "react";
import React from "react";
function Popular() {
  useEffect(() => {
    popularGet();
  }, []);

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