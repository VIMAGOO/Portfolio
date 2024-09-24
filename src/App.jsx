// Importing BrowserRouter from react-router-dom for routing
import { BrowserRouter } from "react-router-dom";

// Importing components that will be used in the application
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components";

// Defining the main App component
const App = () => {
  return (
    // Wrapping the application in a BrowserRouter to enable routing
    <BrowserRouter>
      {/* Setting the main container with a relative z-index for stacking context */}
      <div className='relative z-0 bg-primary'>
        {/* Setting the background pattern for the hero section */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          {/* Rendering the Navbar component */}
          <Navbar />
          {/* Rendering the Hero component */}
          <Hero />
        </div>
        {/* Rendering the About section */}
        <About />
        {/* Rendering the Tech section */}
        <Tech />
        {/* Rendering the Experience section */}
        <Experience />
        {/* Rendering the Works section */}
        <Works />
        {/* Wrapping the Contact section in a div with relative z-index */}
        <div className='relative z-0'>
          {/* Rendering the Contact component */}
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

// Exporting the App component for use in other files
export default App;
