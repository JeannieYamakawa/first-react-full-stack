import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
          {/* line below says render whatever child routes this route has */}
          {this.props.children}
      </div>
    );
  }
}
