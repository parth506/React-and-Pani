import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Your customRender function should be imported if it's in another file
// import { customRender } from '../customReact/customreact.js'


const anotheruser = "Chai AUr react"
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click me to visit Google',
  anotheruser
)

// Render custom element in a separate container
// customRender(
//   reactElement,
//   document.getElementById('custom-root')
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
