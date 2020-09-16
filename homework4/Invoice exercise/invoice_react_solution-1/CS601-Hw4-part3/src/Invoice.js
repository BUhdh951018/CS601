import React, { Component } from 'react';
import InputControl from './InputControl';
import List from './List';

const Country = [
  {name: "US", symbol: "$", tax: 2},
  {name: "Japan", symbol: "$", tax: 3},
  {name: "Saudi Riyal", symbol: "$", tax:4},
  {name: "South African Rand", symbol: "$", tax: 3},
  {name: "Mexican peso", symbol: "$", tax: 2.5},
]

const InvoiceState = {
  VALID: {
    OK: "OK",
    NOT_OK: "NOT_OK",
  },
  INVALID: {
    PRICE: "Price is invalid",
    INVENTORY: "Inventory is invalid",
    NAME: "Name is invalid",
    COUNTRY: "Country is invalid",
    QUANTITY: "Quantity is invalid",
  }
}

type Item = {
  quantity: number,
  price: number,
  description: string,
}

export default class Invoice extends Component{
  state = {
    editing : true,
    partNumber: "",
    countryIndex: 0,
    partDescription: "",
    quantity: 0,
    price: 0,
    items: [],
    discount: 0,
    status: null,
  }
  render(){

    const generate = () => {
      let status = InvoiceState.VALID.OK;
      if(this.state.items.find((item) => item.quantity <= 0)){
        status = InvoiceState.INVALID.QUANTITY;
      }
      if(this.state.items.find((item) => item.price <= 0)){
        status = InvoiceState.INVALID.PRICE;
      }
      if(status !== InvoiceState.VALID.OK){
        this.setState({status : status})
      }else{
        this.setState(
          {
            editing: false,
          }
        );
      }
    };

    const addItem = () => {
      this.setState((state) => {
        const items = state.items;
        items.push({quantity: state.quantity, price: state.price, description: state.partDescription});
        return {
            items: items,
            quantity: 0,
            price: 0,
            partDescription: "",
          };
      });

    }

    const total = () => {
      let total = this.state.items.reduce((item1, item2) => parseFloat(item1.quantity) * parseFloat(item1.price) + parseFloat(item2.quantity) * parseFloat(item2.price),
      {description: "", quantity: 0, price: 0});
      let seletedCountry = Country[this.state.countryIndex];
      total = parseFloat(total) * (1 - this.state.discount/100) * (1 + seletedCountry.tax/100);
      return total.toFixed(2) + seletedCountry.symbol;
    };


    return (
      <div className="Invoice">
        {this.state.editing ?
          <div>
            <InputControl title="Part Number"><input onChange={event => this.setState({partNumber:event.target.value})}/></InputControl>
            <InputControl title="Country">
              <select onChange={event => this.setState({countryIndex:event.target.value})}>
                {Country.map((country, i) => <option value={i}>{country.name}</option>)}
              </select>
            </InputControl>
            <InputControl title="Part Description"><input value={this.state.partDescription} onChange={event => this.setState({partDescription:event.target.value})}/></InputControl>
            <InputControl title="Quantity"><input type="number" value={this.state.quantity} onChange={event => this.setState({quantity:event.target.value})}/></InputControl>
            <InputControl title="Price"><input type="number" value={this.state.price} onChange={event => this.setState({price:event.target.value})}/></InputControl>
            <List items={this.state.items} country={Country[this.state.countryIndex]}/>
            <button className="Button" onClick={addItem}>Add Item</button>
            <InputControl title="Discount"><input type="number" value={this.state.discount} onChange={event => this.setState({discount:event.target.value})}/></InputControl>
            <div className="State">{this.state.status}</div>
            <button className="Button" onClick={generate}>Generate Invoice</button>
          </div>
          :
          <div>
            <div className="Title">Invoice</div>
              <div className="PartNumber">{this.state.partNumber}</div>
              <List items={this.state.items} country={Country[this.state.countryIndex]}/>
              <div className="Bottom">
              <div><span className="FloatRight">{"- " + this.state.discount + "%"}</span></div>
              <div><span className="FloatRight">{"tax: " + Country[this.state.countryIndex].tax + "%"}</span></div>
              <div><span className="FloatRight">{total()}</span></div>
            </div>
          </div>
        }
      </div>

    );
  }


}
