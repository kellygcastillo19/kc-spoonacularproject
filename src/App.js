// Imports the function Pages from the following module
import Pages from "./pages/Pages";
// Imports Browser Router from React Router
// Reference: https://reactrouter.com/en/main/router-components/browser-router
import { BrowserRouter } from "react-router-dom";
// Imports the function Search from the following module
import Search from "./components/Search";
// Imports Link element from React Router DOM npm package that lets you implement dynamic routing in a web app
// Reference: https://reactrouter.com/en/main/components/link 
import { Link } from "react-router-dom";

// The function App renders the following 
// <BrowserRouter> stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack
// The Link element lets the user navigate to another page by clicking on it
// The Link element surrounding h1 makes it clickable. When clicked, the user is directed to the home page
// Search and Pages are also rendered here
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to={"/"}>
          <h1>Füd</h1>
        </Link>
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
