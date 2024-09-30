import React from 'react';
import ReactDOM from 'react-dom/client'; // Importing React DOM for rendering
import App from './App'; // Importing the main App component
import './styles/Global.css'; // Importing global styles

// Create a root element for rendering the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(<App />);
