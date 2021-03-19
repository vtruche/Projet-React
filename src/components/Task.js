import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Task extends Component{

    render() {
        let {task} = this.props;
        return <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">{task.body}</p>
                    <p className="card-text">{task.user.name}</p>
                    <Link to={`/todos/${task.id}`} className="btn btn-primary">Détails</Link>
                    <Link to={`/todos/${task.id}/modifier`} className="btn btn-warning">Modifier</Link>
                </div>
        </div>
    }
}
