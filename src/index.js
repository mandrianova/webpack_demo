import _ from 'lodash';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Cat from './cat1.png';
import myFunction from './myComponent';
import {a, b} from './myComponent'

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack!'], ' ');
  element.classList.add('hello', 'mx-3');
  const myIcon = new Image();
  myIcon.src = Cat;
  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());
console.log('I get called from index.js!');
myFunction(a)
myFunction(b)