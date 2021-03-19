import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class User extends Component{

    render() {
        let {user} = this.props;
        return <div className="card">
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">E-mail : {user.email}</p>
                <p className="card-text">Tél : {user.phone}</p>
                <p className="card-text">Nombre de tâches : {user.nbrTasks}</p>
                <Link to={`/utilisateurs/${user.id}`} className="btn btn-primary">Détails</Link>
            </div>
        </div>
    }
}
