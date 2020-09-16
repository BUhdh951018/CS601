import React, { Component } from 'react';


export default class List extends Component{

  render(){
    return (
      this.props.items.length > 0 ?
      <div className="List">
        <table className="ItemTable">
          <tr>
            <th className="th">Item</th>
            <th className="th">Quantity</th>
            <th className="th">Price</th>
            <th className="th">Linetotal</th>
          </tr>
          {this.props.items.map(item =>
            <tr>
              <td className="td">{item.description}</td>
              <td className="td">{item.quantity}</td>
              <td className="td">{item.price}</td>
              <td className="td">{(item.quantity * item.price).toFixed(2) + " " + this.props.country.symbol}</td>
            </tr>
          )}
        </table>
      </div>
      :
      null
    );
  }


}
