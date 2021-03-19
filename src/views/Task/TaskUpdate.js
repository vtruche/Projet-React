import React, {Component} from 'react';
import TaskService from "../../services/task.service";

export default class TaskUpdate extends Component{

    constructor(props) {
        super(props);
        this.state = {
            task: {},
            title: "",
            completed: false
        }
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let response = await TaskService.details(id);
        this.setState({
            task: response.data,
            title: response.data.title,
            completed: response.data.completed
        });
    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async handleSubmit(e){
        e.preventDefault();
        let {task, title, completed} = this.state;

        let data = {
            title: title,
            completed: completed
        }

        await TaskService.update(task.id, data);
        this.props.history.push(`/task/${task.id}`);
    }

    render() {
        let {task, title, completed} = this.state;
        return <div className="container">
            <h1>Modification de la tâche - {task.title}</h1>

            <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-group">
                    <label>Titre</label>
                    <input type="text" className="form-control" id="title" required value={title} onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <input type="checkbox" className="form-control" id="status" required value={completed} onChange={(e) => this.handleChange(e)}/>
                </div>
                <button type="submit" className="btn btn-primary">Modifier</button>
            </form>


        </div>
    }
}
