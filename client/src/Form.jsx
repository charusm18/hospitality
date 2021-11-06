import React, { Component } from 'react';
const API_URL = process.env.REACT_APP_API;

export class Form extends Component {
  handleSubmit() {
    let databody = {
      name: this.state.nameIn,
      quote: this.state.quoteIn,
    };

    return fetch(`${API_URL}/insert`, {
      method: 'POST',
      body: JSON.stringify(databody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type='text'
              name='name'
              value={this.nameIn}
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            quote
            <input
              type='text'
              name='quote'
              value={this.quoteIn}
              onChange={this.handleQuoteChange}
            />
          </label>
          <input type='submit' value='Add to DB' />
        </form>
      </div>
    );
  }
}
