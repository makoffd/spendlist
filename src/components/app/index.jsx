import React, { Component } from 'react';
import './styles.css';

import Header from '../header';
import Container from '../container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Container>
          <h1>Spend List</h1>
          <p className="lead">A different way to track your expenses.</p>
          <hr/>
        </Container>
      </div>
    );
  }
}

export default App;
