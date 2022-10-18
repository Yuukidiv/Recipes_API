import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import SearchItems from './SearchItems'
import Description from './Description'
// making the routing (changing the route with the path we choose to render)
import {Route, Routes } from 'react-router-dom'
function Pages() {
    // Browserouter does the browser, routes is the big div and with route we are choosing a path and to that we are giving it our element to render out.
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cuisine/:type" element={<Cuisine />}/>
        <Route path="/search/:search" element ={<SearchItems />}/>
        <Route path="/description/:name" element ={<Description />}/>
    </Routes>
    )
}

export default Pages