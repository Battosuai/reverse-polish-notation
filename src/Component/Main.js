import React, { Component } from 'react'

import Calculator from "../calculator";

class Main extends Component {

    state = {
        userInput:"",
        result: "",
        errors: {}
    }

    componentDidMount(){
        console.log("Did MOunt")
    }

    onSubmit = e => {
        e.preventDefault();
        var result = Calculator(this.state.userInput)
        this.setState({result:result});
    }

    onChange = e =>{
        this.setState({userInput:e.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label htmlFor="input">Input</label>
                    <input type="text" name="input" id="input" onChange={this.onChange}/>
                    <input type="submit" value="Go" />
                    <p className="result" name="result">{this.state.result}</p>
                </form>

            </div>
        )
    }
}

export default Main;
