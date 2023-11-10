// Imports useState React feature
// Reference: https://reactjs.org/docs/hooks-intro.html
import {useState} from 'react';
// Imports useNavigate 
// Reference: https://dev.to/salehmubashar/usenavigate-tutorial-react-js-aop
import { useNavigate } from 'react-router-dom';

function Search() {

    // useState declares a "state variable" which is called input here
    // useState returns an array with two items: the current state of input, which is set to the initial state of an empty string useState("")
    // setInput is the function that updates the current state
    const [input, setInput] = useState("");
    // The useNavigate function is assigned to variable navigate
    // The variable navigate can now be used anywhere to navigate to any page
    const navigate = useNavigate();

    // The submitHandler function takes an event object as its parameter
    // When the function is called, it prevents the default action of the event from occuring
    const submitHandler = (e) => {
        e.preventDefault();
        // navigate is used to redirect the user to the searched page that contains their input; shows them what they searched for
        navigate('/searched/' + input)
    };

    // html returned by the function Search 
    return (
        // Reference: https://reactjs.org/docs/forms.html
        // Reference : https://www.w3schools.com/react/react_forms.asp
        // The onSubmit attribute of the form contains an event handler that will call the submitHandler function when the user hits enter
        <form onSubmit={submitHandler}>
            <div>
                <input 
                    // The onChange event is a method that is triggered when the value of the input field changes, either through user input or programmatically
                    // The setInput function is called with the e.target.value as an argument, which updates the value of the input state variable
                    // The value attribute is set to the value of the input state variable, which means that the value displayed in the input field will be the current value of the input state variable.
                    onChange={(e) => setInput(e.target.value)}
                    type="text" 
                    value={input} 
                />
            </div>
        </form>
    )
}

// Reference: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export 
// The export statement exports the function Search from this module so that it can be used by other parts of your program
export default Search