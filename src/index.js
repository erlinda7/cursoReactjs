import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';


import App from './components/App';

const contanier = document.getElementById('app');  //app es el id de un div

ReactDOM.render(<App />,  contanier);