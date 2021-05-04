import React, { Component } from 'react';
import UserDataService from "../Services/UserDataService";

class ListUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.refreshUsers = this.refreshUsers.bind(this)
    }

    componentDidMount() {
        this.refreshUsers();
    }

    refreshUsers() {
        UserDataService.retrieveAllUser()//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ users: response.data._embedded.users })
                }
            )
    }

    render() {
        return (
            <div className="container">
                <h3>All Courses</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map(
                                user =>
                                    <tr key ={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.email}</td>
                                        <td>{user.firstname}</td>
                                        <td>{user.lastname}</td>
                                        <td>{user.mdp}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListUserComponent