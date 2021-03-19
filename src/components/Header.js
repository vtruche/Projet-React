import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component{

    render() {
        return <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">React To-Do List</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/taches" className="nav-link">Taches</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/utilisateurs" className="nav-link">Utilisateurs</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}
