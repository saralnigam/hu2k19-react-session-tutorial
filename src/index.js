import './index.css';

// Grab the DOM element
const rootElement = document.getElementById('root');

// Create your DOM element
const headingElement = document.createElement('h1');
headingElement.innerHTML = "Hello World"

// Add your DOM element to the DOM for rendering
rootElement.appendChild(headingElement);
