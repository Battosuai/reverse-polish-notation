import React, { Component } from "react";

import Calculator from "../calculator";
import RpnConverter from "../rpnConverter";
import "./Main.css";

class Main extends Component {
  state = {
    userInput: "",
    userInputRpn: "",
    result: "",
    errors: "",
    errorsRpn: "",
    resultRpn: ""
  };

  checkString = string => {
    var areWeInsideANumber = false;
    var haveWeFoundDot = false;
    var wasPreviousTokenOperator = false;
    string = string.replace(/ /g, "");
    for (var i = 0; i < string.length; i++) {
      var a = string.charAt(i);

      // we've just approached a second dot in a number. Illegal.
      if (areWeInsideANumber && haveWeFoundDot && a === ".") return false;

      if (/[+\-/*^]/.test(a)) {
        // previous token was an operator and this one is so
        // there are two operators after each other and the input
        // is invalid
        if (wasPreviousTokenOperator) return false;

        wasPreviousTokenOperator = true;
      } else {
        wasPreviousTokenOperator = false;
      }

      // check if current char is a number
      if (/[0-9]/.test(a)) {
        areWeInsideANumber = true;
        // or an operator
      } else if (/[+\-/*^]/.test(a)) {
        areWeInsideANumber = false;
        haveWeFoundDot = false;
      }

      // first in a number dot found
      if (areWeInsideANumber && a === ".") {
        haveWeFoundDot = true;
      }
    }

    return true;
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ errors: "", result: "" });

    var string = this.state.userInput;

    //remove invalid characters
    if (/[^0-9.+\-/*^()]/g.test(string)) {
      string = string.split(/[^0-9.+\-/*^()]/g).join(" ");
    }

    //remove extra whitespaces
    string = string.replace(/  +/g, " ");
    // if string ends or startswith either of those
    // '.', '+', '-', '*', '/', '^' it must be incorrect
    // NOTE: '-' is allowed at the beginning as it means
    // negative number
    if (
      /[.+*/^)]/.test(string.charAt(0)) ||
      /[0-9.(]/.test(string.charAt(string.length - 1))
    ) {
      this.setState({ errors: "Invalid Expression" });
      return;
    }

    var isValid = this.checkString(string);

    if (!isValid) {
      this.setState({ errors: "Invalid Expression" });
      return;
    }

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

  onChangeRpn = e => {
    this.setState({ userInputRpn: e.target.value });
  };

  onSubmitRpnConverter = e => {
    e.preventDefault();
    this.setState({ errorsRpn: "", resultRpn: "" });

    var string = this.state.userInputRpn;

    var result = RpnConverter(string);
    if (result.error) {
      this.setState({ errorsRpn: "Invalid Expression" });
    } else {
      this.setState({ resultRpn: result.result });
    }
  };

  render() {
    const { errors, errorsRpn } = this.state;
    return (
      <div>
        <form className="sampleForm" onSubmit={this.onSubmit.bind(this)}>
          <label htmlFor="input">Postfix</label>
          <input type="text" name="input" id="input" onChange={this.onChange} />
          <input type="submit" value="=" />
          <input type="text" readOnly value={this.state.result} />
          {errors && <div>{errors}</div>}
        </form>
        <br />
        <form
          className="sampleForm"
          onSubmit={this.onSubmitRpnConverter.bind(this)}
        >
          <label htmlFor="input">Rpn Converter</label>
          <input
            type="text"
            name="input"
            id="input"
            onChange={this.onChangeRpn}
          />
          <input type="submit" value="=" />
          <input type="text" readOnly value={this.state.resultRpn} />
          {errorsRpn && <div>{errorsRpn}</div>}
        </form>
      </div>
    );
  }
}

export default Main;
