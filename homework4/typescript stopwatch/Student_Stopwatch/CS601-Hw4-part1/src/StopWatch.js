import React, { Component } from 'react';

let timer = null;

export default class StopWatch extends Component{
  state = {
    timeLapsed : 0,
  }
  render(){
    const start = () => {
      this.setState((state) => ({timeLapsed: state.timeLapsed + 100}));
      timer = setTimeout(start, 100);
    }
    const stop = () => {
      clearTimeout(timer);
    }
    const reset = () => {
      this.setState({timeLapsed: 0});
    }

    return (
      <div>
        <p>{(this.state.timeLapsed/1000).toFixed(1)}s</p>
        <button onClick={start} >Start</button>
        <button onClick={stop} >Stop</button>
        <button onClick={reset} >Reset</button>
      </div>
    );
  }


}
