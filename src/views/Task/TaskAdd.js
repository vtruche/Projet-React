import React, {Component} from 'react';
import TaskService from "../../services/task.service";

export default class TaskAdd extends Component{

    constructor(props) {
        super(props);
        this.state = {
            title: null
        }
    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async handleSubmit(e){
        e.preventDefault();
        let {title} = this.state;

        let data = {
            title: title,
            userId: 1
        }

        await TaskService.create(data);
        this.props.history.push('/taches');
    }

    render() {
        return <div className="container">
            <h1>Ajouter votre tâche</h1>

            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label>Titre</label>
                    <input type="text" id="title" className="form-control" required
                        onChange={(event) => this.handleChange(event)}/>
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
        </div>
    }

}
