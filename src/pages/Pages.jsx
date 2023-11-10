import React from 'react';
// imports the function Home from the following module
import Home from './Home';
// imports the function Searched from the following module
import Searched from './Searched';
// imports the function Recipe from the following module
import Recipe from './Recipe';
// imports Route and Routes components from React Router
// Reference: https://www.geeksforgeeks.org/reactjs-router/
import { Route, Routes } from "react-router-dom";

// The function Pages renders the following 
// The Routes component iterates over its Route children and finds the first one that matches the path
// The Route component helps to establish the link between the component's user interface and the URL
// path specifies the pathname assigned to the component
// element refers to the component which willr ender on the matching path
function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
    );
}

// Reference: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export 
// The export statement exports the function Pages from this module so that it can be used by other parts of your program
export default Pages;