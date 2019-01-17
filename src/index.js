// Import React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// Grab the DOM element
const rootElement = document.getElementById('root');

// Create your React element
const reactElement = React.createElement(
  "h1",
  {},
  "Hello World"
)

// This is point of interaction of React and HTML DOM
// Add your React Element for rendering
ReactDOM.render(reactElement, rootElement);
