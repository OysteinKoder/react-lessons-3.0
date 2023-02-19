import "./App.css";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// <BrowserRouter>:
// This component provides a context for the application to use client-side routing using the HTML5 history API.

// <Link to="/about">:
// This is a component provided by React Router that renders a clickable link to the "about" page of the application.
// Clicking on this link will update the URL and trigger the rendering of the corresponding component.

//<Routes>:
// This is a component provided by React Router that defines a set of routes for the application.
// It renders the component corresponding to the current route based on the current URL.

//<Route path="/about" element={<AboutPage />} />:
// This is a component provided by React Router that defines a route for the "about" page of the application.
// It specifies that when the URL matches the "/about" path, the AboutPage component should be rendered.

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
