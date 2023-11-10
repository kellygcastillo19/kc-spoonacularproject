// Imports useEffect and useState React features 
// Reference: https://reactjs.org/docs/hooks-intro.html
import { useEffect, useState } from "react";
// Imports the useParams hook from React Router
// Reference: https://javascript.plainenglish.io/react-router-how-to-use-the-useparams-hook-321a6461732
import { useParams } from "react-router-dom";
import React from "react";

function Recipe() {

    // useParams returns an object that contains the parameters of the current URL
    // useParams is being used to asign the returned object to a variable called params
    // Example: If the URL of the React Router component is /products/123, 
    // and the route is defined with a dynamic parameter like /products/:productId, 
    // then the object returned by useParams would be { productId: '123' }
    // You can then access the value of the productId parameter by accessing params.productId.
    let params = useParams();
    // useState declares a "state variable" called details
    // useState returns an array with two items: the current state of details, which is set to the initial state of an empty object useState({})
    // setDetails is the function that updates the current state
    const [details, setDetails] = useState({});
    // useState declares a "state variable" called activeTab
    // useState returns an array with two items: the current state of details, which is set to the initial state of an string "instructions"
    // setActive is the function that updates the current state
    const [activeTab, setActiveTab] = useState("instructions");

    // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
    // The async function is a way to write asynchronous code in JavaScript, allowing other code to run in the meantime
    // The async function is a special type of function that returns a promise
    // A promise is an object that represents the result of the async function
    // The await expression pauses the execution of the function until a promise is resolved
    // The fetchDetails function sends an HTTP request to the Spoonacular API and waits for a response
    // Once the response is received, it converts the response to JSON and returns the resulting data
    // setDetails(detailData) will update the current state of the details state variable to the value of the object detailData
    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=e651b079eb2a4f55a0b04627fff59f28`
        );
        const detailData = await data.json();
        setDetails(detailData);
    };

    // The function passed to useEffect calls a function called fetchDetails
    // The second argument to useEffect is an array containing the params.name variable
    // This means that the fetchDetails function will be called after the component renders and any time the params.name value changes
    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    // html that is returned by the function fetchDetails
    return (
        <div className="detailWrapper">
            <section>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </section>
            <div className="info">
                <button 
                // If activeTab equals "instructions," then add the class "active" to it, else do not add anything
                // When Instructions button is clicked, a function runs so that setActiveTab is set to "instructions"
                    className={activeTab === 'instructions' ? 'active' : ''} 
                    onClick={() => setActiveTab("instructions")}
                >
                    Instructions
                </button>
                <button 
                // If activeTab equals "ingredients," then add the class "active" to it, else do not add anything
                // When Ingredients button is clicked, a function runs so that setActiveTab is set to "ingredients"
                    className={activeTab === 'ingredients' ? 'active' : ''} 
                    onClick={() => setActiveTab("ingredients")}
                >
                    Ingredients
                </button>
                {activeTab === 'instructions' && (
                // The && operator is a logical operator that will evaluate to the value of the second operand if the first operand is true, and will evaluate to false if the first operand is false
                // If activeTab equals 'instructions', this expression will be true and the block of html that follows will be rendered
                // If activeTab does not equal 'instructions', the expression will be false and the block of html will not be rendered
                    <div>
                        <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                        <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                    </div>
                )}
                {activeTab === 'ingredients' && (
                // The && operator is a logical operator that will evaluate to the value of the second operand if the first operand is true, and will evaluate to false if the first operand is false
                // If activeTab equals 'ingredients', this expression will be true and the block of html that follows will be rendered
                // If activeTab does not equal 'ingredients', the expression will be false and the block of html will not be rendered
                     <ul>
                     {details.extendedIngredients.map((ingredient) => (
                         <li key={ingredient.id}>{ingredient.original}</li>
                     ))}
                 </ul>
                )}
            </div>
        </div>
    );

}

// Reference: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export 
// The export statement exports the function Recipe from this module so that it can be used by other parts of your program
export default Recipe