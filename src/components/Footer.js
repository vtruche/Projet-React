import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component{

    render() {
        return <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <p className="navbar-link">Nos réseaux : </p>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-link" href="https://twitter.com"> Twitter </a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-link" href="https://facebook.com"> Facebook </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}