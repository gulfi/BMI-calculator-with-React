import React, { Component } from 'react';
 

class Range extends Component {
    constructor(props) {
        super(props)
        this.state={
            value:props.value,
        }
    }

    static defaultProps = {
        min:0,
        max:300,
        step:1,
    }

    _handleChange(event){
        console.log(event.target.value)
        this.props.onChange(this.state.value);
        this.setState({ value: event.target.value });
    };


  render() {
    return (
        <div className="App">
            <input 
            type="range" 
            value={this.state.value}
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}
            onChange={this._handleChange.bind(this)}
            />
        </div>
    );
  }
}

export default Range;
