import React, { Component } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ExampleBody from 'components/ExampleBody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ExampleBody />
        <Footer />
      </div>
    );
  }
}

export default App;
