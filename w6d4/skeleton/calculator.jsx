import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num1: "", num2: "", result: 0 };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.clearNum = this.clearNum.bind(this);
    this.addNum = this.addNum.bind(this);
    this.subNum = this.subNum.bind(this);
    this.multNum = this.multNum.bind(this);
    this.divNum = this.divNum.bind(this);
  }

  // your code here

  render() {
    const { num1, num2, result } = this.state;
    return (
      <div>
        <h1>{ result }</h1>
        <input onChange={ this.setNum1 } value={ num1 }></input>
        <input onChange={ this.setNum2 } value={ num2 }></input>

        <button onClick={ this.clearNum } >Clear</button>
        <button onClick={ this.addNum } >+</button>
        <button onClick={ this.subNum } >-</button>
        <button onClick={ this.multNum } >*</button>
        <button onClick={ this.divNum } >/</button>
      </div>
    );
  }

  setNum1(e) {
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num1 });
  }

  setNum2(e) {
    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num2 });
  }

  clearNum(e) {
    e.preventDefault;
    this.setState({ num1: "", num2: "", result: 0 });
  }

  addNum(e) {
    e.preventDefault;
    const result = this.state.num1 + this.state.num2;
    this.setState({ result });
  }

  subNum(e) {
    e.preventDefault;
    const result = this.state.num1 - this.state.num2;
    this.setState({ result });
  }

  multNum(e) {
    e.preventDefault;
    const result = this.state.num1 * this.state.num2;
    this.setState({ result });
  }

  divNum(e) {
    e.preventDefault;
    const result = this.state.num1 / this.state.num2;
    this.setState({ result });
  }
}

export default Calculator;
