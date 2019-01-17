// Import React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Import React Components
import App from './App';

import './index.css';

// Grab the DOM element
const rootElement = document.getElementById('root');

// This is point of interaction of React and HTML DOM
// Add your React Element for rendering
ReactDOM.render(<App />, rootElement);
