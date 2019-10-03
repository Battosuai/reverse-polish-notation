import React, { Component } from "react";

import Calculator from "../calculator";
import "./Main.css";

class Main extends Component {
  state = {
    userInput: "",
    result: "",
    errors: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ errors: "" });
    var string = this.state.userInput;
    string = string.replace(/  +/g, " ");

    var result = Calculator(string);
    if (result.error) {
      this.setState({ errors: "Invalid Expression" });
    } else {
      this.setState({ result: result.value });
    }
  };

  onChange = e => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <form className="sampleForm" onSubmit={this.onSubmit.bind(this)}>
          <label htmlFor="input">Input</label>
          <input type="text" name="input" id="input" onChange={this.onChange} />
          <input type="submit" value="=" />
          <input type="text" readOnly value={this.state.result} />
          {errors && <div>{errors}</div>}
        </form>
      </div>
    );
  }
}

export default Main;
