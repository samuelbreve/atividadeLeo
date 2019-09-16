import React, { Component } from "react";

export default class GitUser extends Component {
    state = {
        user: []
    };

    async componentDidMount() {
        const response = await fetch(
            "https://api.github.com/users/torvalds"
        );
        const data = await response.json();
        this.setState({ user: data });
    }

    render() {
        const { user } = this.state;
        return (
            <ul>
                <li key={user.id}>
                    <img src={user.avatar_url} alt=""></img><br />
                    <strong>{user.name}</strong><br />
                    <strong>{user.login}</strong><br />
                    <strong>{user.company}</strong><br />
                    <strong>{user.location}</strong>
                </li>
            </ul>
        );
    }
}