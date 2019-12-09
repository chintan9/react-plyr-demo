import React, { Component } from 'react';
import { render } from 'react-dom';
import PlyrComponent from './PlyrComponent';
import './style.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p>
          The example of react plyr 
        </p>
        <PlyrComponent/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
