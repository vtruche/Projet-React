import React, {Component} from 'react';

export default class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    async componentDidMount() {

    }

    render() {
        let {tasks} = this.state;
        return <div className="container">
            <h1>Homepage de la To-Do List</h1>
            <p> Bienvenue sur votre To-Do liste</p>
        </div>
    }
}
