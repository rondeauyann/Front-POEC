import React, { Component } from 'react';
import './App.css';
import InstructorApp from './InstructorApp';
import ListUserComponent from './Component/ListUserComponent';

class App extends Component {
    render() {
        return (
            <div className="container">
                <InstructorApp />
                <ListUserComponent/>
            </div>
        );
    }
}


export default App;
