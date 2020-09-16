import React, { Component } from 'react';


export default class Invoice extends Component{
  state = {
    value: "",
  }
  render(){

    const add = () => {this.setState({editing: false})};


    return (
      <div className="Control">
        <span className="Control-title">{this.props.title}</span>
        <span className="Control-input">{this.props.children}</span>
      </div>
    );
  }


}
