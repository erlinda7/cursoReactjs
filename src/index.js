import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import BadgeNew from './pages/BadgeNew';



const contanier = document.getElementById('app');  //app es el id de un div

ReactDOM.render(<BadgeNew />,  contanier);