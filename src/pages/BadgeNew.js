import React from 'react';

import header from '../images/badge-header.svg';
//import './styles/BadgeNew.css'

import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
    state = { form: {
        firstName:'',
        lastName:'',
        email:'',
        jobTitle:'',
        twitter:''
    } };

    handleChange = e => {
        // const nextForm = this.state.form;
        // nextForm[e.target.name] = e.target.value;
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
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
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default BadgeNew;