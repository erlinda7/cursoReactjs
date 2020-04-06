import React from 'react';

import confLogo from '../images/badge-header.svg'
import './styles/Badge.css'; //react-app y webpack saben como insertarlo

class Badge extends React.Component {

    render() {
        // const firstName = 'Erlinda';
        // const lastName = 'Chambi';
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia" />
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={this.props.avatar} alt="Avatar"></img>
                    <h1>{this.props.firstName} <br />{this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <p>{this.props.jobTitle}</p>
                    <div>@{this.props.twitter}</div>
                </div>

                <div className="Badge__footer">
                    #plazticonf
                </div>

            </div>
        )
    }
}

export default Badge;