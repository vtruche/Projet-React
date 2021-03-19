import React, {Component} from 'react';
import TaskService from "../../services/task.service";

export default class TaskDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            post: {}
        }
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let response = await TaskService.details(id);
        this.setState({task: response.data});
    }

    async handleDelete(){
        let {task} = this.state;
        await TaskService.delete(task.id);
        this.props.history.push('/taches');
    }

    render() {
        let {task} = this.state;
        return <div className="container">
            <h1>Tâche - {task.title}</h1>
            <h2>Status</h2>
            <p>{task.completed}</p>
            <button className="btn btn-danger" onClick={() => this.handleDelete()}>Supprimer</button>
        </div>
    }
}
