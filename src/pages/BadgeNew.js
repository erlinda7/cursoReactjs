import React from 'react';

import header from '../images/badge-header.svg';
//import './styles/BadgeNew.css'

import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
    state = { form: {} };

    handleChange = e => {
        const nextForm = this.state.form;
        nextForm[e.target.name] = e.target.value;
        this.setState({
            // form: {
            //     [e.target.name]: e.target.value,
            // }
            form: nextForm
        })
    }

    render() {
        return (
            <div>
                <Navbar />

                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"></img>
                </div>
                <div className="contanier">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName="Erlinda"
                                lastName="Chambi"
                                twitter="erlindachambi"
                                jobTitle="Frontend Engineer"
                                avatar="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default BadgeNew;