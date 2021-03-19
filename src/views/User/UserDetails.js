import React, {Component} from 'react';
import {UserService} from "../../services/user.service";

export default class UserDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    async componentDidMount() {
        let response = await UserService.details(this.props.match.params.id);
        this.setState({user: response.data});
    }

    render() {
        let {user} = this.state;
        return <div className="container">
            <h1>{user.name}</h1>
            <p>E-mail : {user.email}</p>
            <p>Tél : {user.phone}</p>
        </div>
    }

}
