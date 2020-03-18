/*const element= document.createElement('h1');
element.innerText= 'Hello, Platzi badges!!!!';


const contanier= document.getElementById('app');

contanier.appendChild(element);*/

import React from 'react';
import ReactDOM from 'react-dom';

const jsx = <h1> Hello , Platzi Badges from React</h1>;  //jsx
//const element = React.createElement('h1', {}, 'Hola! Soy los childrens')   //que tipo de elemento,  cuales son los atributos 'son los properties', que elemento trae children como innerText innerHtml
//const element = React.createElement('a', {href: 'https://platzi.com'}, 'Ir a Platzi');

const name = 'Erlinda';
//const element = React.createElement('h1', {}, `Hola, soy ${name}`);

//const jsx1= <h1> Hola soy, {name}</h1>
//const jsx1 = <h1>Hola soy, {2+2}</h1>
/*const sum = () => 3 + 3;
const jsx1 = <h1>Hola soy, {sum()}</h1>*/

//jsx
const jsx1 = (
  <div>
    <h1>Hello, soy Erlinda</h1>
    <p>Soy ingeniero mmmm</p>
  </div>
);

//create
const element = React.createElement(
  'div',
  {},
  React.createElement('h1',{},'Hola soy, Erlinda'),
  React.createElement('p',{},'Soy ingeniero mmm')
);

const contanier = document.getElementById('app');  //app es el id de un div

//ReactDOM.render(__qué__, __dónde__);
//ReactDOM.render(element, contanier);
ReactDOM.render(jsx1, contanier);