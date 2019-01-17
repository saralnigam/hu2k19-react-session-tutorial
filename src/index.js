// Import React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// Grab the DOM element
const rootElement = document.getElementById('root');

// Create your React Component
function Heading(){
  return <h1>Hello World</h1>;
}

// This is point of interaction of React and HTML DOM
// Add your React Element for rendering
ReactDOM.render(Heading(), rootElement);
// ReactDOM.render(<Heading />, rootElement);
