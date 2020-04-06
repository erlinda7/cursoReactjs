import React from 'react';
import ReactDOM from 'react-dom';

import Badge from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';


const contanier = document.getElementById('app');  //app es el id de un div

ReactDOM.render(
    <Badge
        firstName="Erlinda"
        lastName="Chambi"
        avatar="https://www.gravatar.com/avatar?d=identicon"
        jobTitle="Fronted Engineer"
        twitter="lindachambi" 
        />,
    contanier
);