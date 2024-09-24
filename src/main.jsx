// Importing React library for building user interfaces
import React from 'react';
// Importing ReactDOM to interact with the DOM
import ReactDOM from 'react-dom/client';
// Importing the main App component that serves as the entry point of the application
import App from './App.jsx';
// Importing global CSS styles for the application
import './index.css';

// Creating a root element and rendering the App component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrapping the App component in React.StrictMode for highlighting potential problems */}
    <App />
  </React.StrictMode>,
);
