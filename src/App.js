import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./views/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskList from "./views/Task/TaskList";
import TaskAdd from "./views/Task/TaskAdd";
import TaskDetails from "./views/Task/TaskDetails";
import TaskUpdate from "./views/Task/TaskUpdate";
import UserList from "./views/User/UserList";
import UserDetails from "./views/User/UserDetails";

export default class App extends Component{

    render() {
        return <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/taches" component={TaskList} />
                <Route exact path="/taches/ajouter" component={TaskAdd} />
                <Route exact path="/taches/:id" component={TaskDetails} />
                <Route exact path="/taches/:id/modifier" component={TaskUpdate} />

                <Route exact path="/utilisateurs" component={UserList} />
                <Route exact path="/utilisateurs/:id" component={UserDetails} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    }
}
