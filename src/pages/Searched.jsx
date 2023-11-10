import React from "react";
// Imports useEffect and useState React features 
// Reference: https://reactjs.org/docs/hooks-intro.html
import { useEffect, useState } from "react";
// Imports the useParams hook from React Router
// Reference: https://javascript.plainenglish.io/react-router-how-to-use-the-useparams-hook-321a6461732
import { useParams } from "react-router-dom";
// Imports Link element from React Router DOM npm package that lets you implement dynamic routing in a web app
// Reference: https://reactrouter.com/en/main/components/link 
import { Link } from "react-router-dom";

function Searched() {

    // useState declares a "state variable" called searchedRecipes
    // useState returns an array with two items: the current state of searchedRecipes, which is set to the initial state of an empty array useState([])
    // setSearchedRecipes is the function that updates the current state
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
    // The async function is a way to write asynchronous code in JavaScript, allowing other code to run in the meantime
    // The async function is a special type of function that returns a promise
    // A promise is an object that represents the result of the async function
    // The await expression pauses the execution of the function until a promise is resolved
    // The getSearched function sends an HTTP request to the Spoonacular API and waits for a response
    // Once the response is received, it converts the response to JSON and returns the resulting data
    // setSearchedRecipes(recipes.results) will update the current state of the searchedRecipes state variable to the results array
    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=e651b079eb2a4f55a0b04627fff59f28&query=${name}`
        );
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };

    // The function passed to useEffect calls getSearched and passes it the value of the params.search variable
    // The second argument to useEffect is an array containing the params.search variable
    // This means that the getSearched function will be called after the component renders and any time the params.search value changes
    useEffect(() => {
        getSearched(params.search);
    },[params.search]);

    return (
        <div className="grid">
            {searchedRecipes.map((item) => { // Reference: https://levelup.gitconnected.com/using-the-map-function-in-javascript-react-b433736759d4
            // The .map() function applies a function to each element in an array and return a new array with the modified elements
            // Reference: https://reactrouter.com/en/main/components/link
            // The Link element lets the user navigate to another page by clicking on it
            // The Link element surrounding the item image and the item title will make the whole thing clickable. When clicked, the user is directed to that recipe page
                return (
                    <div className="recipeInfo" key={item.id}> 
                        <Link to={'/recipe/' + item.id}>
                        <img src={item.image} alt="" />
                        <h4>{item.title}</h4>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

// Reference: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export 
// The export statement exports the function Popular from this module so that it can be used by other parts of your program
export default Searched;