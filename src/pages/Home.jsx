// Imports the function Popular from the following module
import Popular from '../components/Popular';
import React from 'react';

// The function Home returns the follow html
// The Popular function is rendered here
function Home() {
    return (
        <div> 
            <Popular /> 
        </div>
    );
}

// Reference: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export 
// The export statement exports the function Home from this module so that it can be used by other parts of your program
export default Home;