import React, { Component } from "react";
import ReactDOM from "react-dom";
import Projects from './component/projects'
import AddProject from './component/addProject'
class Hello extends Component {
    constructor() {
        super();
        this.state = {
            projects: [
                {
                    'category': 'Food Panda',
                    'title': 'Web Development'
                },
                {
                    'category': 'Swigy',
                    'title': 'Mobile Development'
                },
                {
                    'category': 'Facebook',
                    'title': 'Social Network'
                }
            ],
            categories : ['Mobile Development', 'Web development','Socical Networ'] 
        }
    }
    handleAddProject(project){
            let projects = this.state.projects;
            projects.push(project);
            this.setState({projects:projects});

    }
    render() {
        return (
            <div>
                <h1>Hello App</h1>
                <Projects projects={this.state.projects}   />
                <AddProject categories = {this.state.categories} addProject = {this.handleAddProject.bind(this)}/>
            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById("index"));