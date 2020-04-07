import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges'


const contanier = document.getElementById('app');  //app es el id de un div

ReactDOM.render(<Badges />,  contanier);