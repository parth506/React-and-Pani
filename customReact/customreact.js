function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}
const anotheruser="Chai AUr react"
const reactElement =React.createElement{
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click me to visit Google',
  anotheruser
};

customRender(
  reactElement,
  document.getElementById('root')
);