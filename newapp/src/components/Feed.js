import React, { Component } from 'react';
import axios from 'axios';

class Feed extends Component {
    
    constructor(props) {
        
        super(props) 
        this.state = {
            // keep empty
        }
    }
    
    componentDidMount() {
        axios.get('https://www.mocky.io/v2/5b967e723000006e000bd2f4')
        .then((res) => {
            this.setState(() => ({persons: res.data}))
            console.log(this.state.persons);
        })
    }

    render() {
        return (
            <div className="Feed">
                {
                    this.state.persons ? this.state.persons.map((persons, index) => (
                        <p key={index}>Name: {persons.name}. Occupation: {persons.occupation}</p>
                    )) : null
                }
            </div>   
        )
    }
}

export default Feed;