import React, { Component } from 'react';
 
class Output extends Component {
    _toFeet(n){
        let realFeet = ((n*0.393700)/12);
        let feet = Math.floor(realFeet);
        let inches = Math.round((realFeet - feet) * 12);
        return feet + "'" + inches;
    }

    _toLbs(n){
        let nearExct = n/0.45359237;
        let lbs = Math.floor(nearExct);
        return lbs;
    }

  render() {
      let height = this._toFeet(this.props.data.height);
      let weight = this._toLbs(this.props.data.weight);
      let bmi = this.props.data.bmi;
      let bmiClass = this.props.data.bmiClass;

    return (
      <div className="App">
        <h3>{height}</h3>
        <h3>{weight}lbs</h3>
        <h3>{bmi}</h3>
    </div>
    );
  }
}

export default Output;
