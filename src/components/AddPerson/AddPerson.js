import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component{
    state = {
        name: '',
        age: ''
    }

    addNameHandler = (event) => {
        this.setState({name: event.target.value});
        console.log(this.state);
    }

    addAgeHandler = (event) => {
        this.setState({age: event.target.value});
        console.log(this.state);
    }
    render () {
        return (
            <div className="AddPerson">
                <input 
                    type="text" 
                    placeholder="Name" 
                    onChange={this.addNameHandler}
                    value={this.state.name}/>
                <input 
                    type="number" 
                    placeholder="Aga" 
                    onChange={this.addAgeHandler}
                    value={this.state.age}/>
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        );
        
    }

}

export default AddPerson;