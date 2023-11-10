// Imports useEffect and useState React features 
// Reference: https://reactjs.org/docs/hooks-intro.html
import { useEffect, useState } from "react";
// Imports React Splide component for the Splide slider/carousal 
// Reference: https://splidejs.com/integration/react-splide/
import { Splide, SplideSlide} from "@splidejs/react-splide";
// Imports CSS file that is to be used with the Splide component
import "@splidejs/splide/dist/css/splide.min.css";
// Imports Link element from React Router DOM npm package that lets you implement dynamic routing in a web app
// Reference: https://reactrouter.com/en/main/components/link 
import { Link } from "react-router-dom";

// The function Popular returns some html 
function Popular(){

    // useState declares a "state variable" which is called popular here
    // useState returns an array with two items: the current state of popular, which is set to the initial state of an empty array useState([])
    // setPopular is the function that updates the current state
    const [popular, setPopular] = useState([]);

    // useEffect tells React that the getPopular function needs to run after render
    // Putting useEffect inside the function component Popular allows access to the popular state variable
    useEffect(() => {
        getPopular();
    },[]);

    // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
    // The async function is a way to write asynchronous code in JavaScript, allowing other code to run in the meantime
    // The async function is a special type of function that returns a promise
    // A promise is an object that represents the result of the async function
    // The await expression pauses the execution of the function until a promise is resolved
    // The getPopular function sends an HTTP request to the Spoonacular API and waits for a response
    // Once the response is received, it converts the response to JSON and returns the resulting data
    // setPopular(data.recipes) will update the current state of the popular state variable to the recipes array
    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=e651b079eb2a4f55a0b04627fff59f28&number=8`);
        const data = await api.json();
        setPopular(data.recipes);
    };

    // html that is returned by the function Popular
    return (
        <div className="wrapper">
            <h3>Popular Picks</h3>

            <Splide // Displays the recipes in a carousel 
                options={{
                    perPage:3, // Displays only 3 recipes per page
                    arrows:false, // Hides the default arrows for moving the carousel
                    pagination:false, // Hides page indication at bottom of the carousel
                    drag:"free", // Allows the user to drag the carousel
                    gap:"5rem", // Places a 5rem gap between the recipes
                }}>

            {popular.map((recipe) => { // Reference: https://levelup.gitconnected.com/using-the-map-function-in-javascript-react-b433736759d4
            // The .map() function applies a function to each element in an array and return a new array with the modified elements
            // This will render a Splide carousel with the recipes. For each recipe, an image and name of the recipe will be displayed
            // Reference: https://reactrouter.com/en/main/components/link
            // The Link element lets the user navigate to another page by clicking on it
            // The Link element surrounding the recipe name and image will make the whole thing clickable. When clicked, the user is directed to that recipe page
                return (
                    <SplideSlide key={recipe.id}>
                        <div className="cardInfo" key={recipe.id}> 
                            <Link to={'/recipe/' + recipe.id}>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt="" />
                            </Link>
                        </div>
                    </SplideSlide>
                ); 
            })}
            </Splide>
        </div>
    );
}

// Reference: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export 
// The export statement exports the function Popular from this module so that it can be used by other parts of your program
export default Popular;
