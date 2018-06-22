import React, { Component } from "react"; 
 
 
class AddProject extends Component{
   

    handleSubmit(e){
        console.log("submit");
        if(this.refs.title.value == ''){
           alert('Please Enter the Title value'); 
        }else{
            this.setState({newProject:{
                title: this.refs.title.value,
                category:this.refs.category.value
            }},function(){
                console.log("AddProject::::"+this.state)
                this.props.addProject(this.state.newProject);
            })
        }
        e.preventDefault();
    }
     
    render(){ 
       let categoriesOption = this.props.categories.map(category =>{
             return <option value={category}  key={category}>{category}</option>
        })
         
        return (
            <div>
                <h1>Add Project</h1>
                <form onSubmit = {this.handleSubmit.bind(this)}> 
                    <div>
                        <label>Title : </label><br/>
                        <input type="text" ref="title"/>
                    </div>
                    <div>
                        <label>category : </label>
                        <select name="category" ref="category">
                            {categoriesOption}
                        </select>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>

        )
    }
}

export default AddProject;