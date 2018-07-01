import React, { Component } from 'react';
import './App.css';

import Range from './Components/Range';
import Output from './Components/Output';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      height:175,
      weight:65,
      bmi:22,
    }
  }

  _heightChange(height){
    this.setState({height: height}, this._setBmi);
  }

  _weightChange(weight){
    this.setState({weight: weight}, this._setBmi);
  }
  _setBMI() {
    let bmi = ((this.state.weight/this.state.height / this.state.height) * 10000).toFixed(2);
    this.setState({bmi: bmi, bmiClass: this._getBmiClass(bmi)},function() {
      console.log(this.state);
    })
  }

  _getBmiClass(bmi) {
    if(bmi < 18) return 'Underweight';
    if(bmi >= 18 && bmi <= 24.9) return 'Normal';
    if(bmi >=25 && bmi <= 29.9 ) return 'Overweight';
    if(bmi >= 30) return 'Obese';

  }

  render() {
    return (
      <div className="App">
      <h1>BMI Calculator</h1>
        <form>
          <div>
            <label>Height</label>
            <Range value={this.state.height} onChange={this._heightChange.bind(this)} />
          </div>
          <div>
            <label>Weight</label>
            <Range value={this.state.weight} onChange={this._weightChange.bind(this)} />
          </div>
        </form>
        <Output data={this.state} />   
      </div>
    );
  }
}

export default App;
