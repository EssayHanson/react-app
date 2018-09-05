import React, { Component } from 'react'

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Steven"
        }
    }

    onChange = (value) => {
        this.setState(() => ({
            name: value
        }));
    }

    render() {
        return <div>
            <p>Hello {this.state.name}</p>
            <input type="text" value={this.state.inputValue} onChange={e => this.onChange(e.target.value)}/>
        </div>
    }
}

export default Input;