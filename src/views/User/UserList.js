import React, {Component} from 'react';
import {UserService} from "../../services/user.service";
import User from "../../components/User";

export default class UserList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        let users = await UserService.list();
        this.setState({users: users});
    }

    render() {
        let {users} = this.state;
        return <div className="container">
            <h1>Liste des utilisateurs</h1>

            <div className="row">
                {users.map(user => {
                    return <div className="col-md-4">
                        <User user={user}/>
                    </div>
                })}
            </div>
        </div>
    }
}
