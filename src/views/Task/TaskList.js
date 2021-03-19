import React, {Component} from 'react';
import TaskService from "../../services/task.service";
import Task from "../../components/Task";
import {Link} from "react-router-dom";
import {UserService} from "../../services/user.service";

export default class TaskList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            task: [],
        }
    }

    async componentDidMount() {
        let tasks = await TaskService.list();
        this.setState({tasks: tasks});
    }

    render() {
        let {tasks} = this.state;
        return <div className="container">
            <h1>Liste des tâches</h1>
            <Link className="btn btn-primary" to="/taches/ajouter">Ajouter une tâche</Link>
            <div className="row">
                {tasks.map(task => {
                    return <div className="col-md-4">
                        <Task task={tasks}/>
                    </div>
                })}
            </div>
        </div>
    }
}
