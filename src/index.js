import React from 'react';
import ReactDOM from 'react-dom';
import Address from './components/Address';
import ToggleButton from './components/ToggleButton';

ReactDOM.render(
  <div>
    <ToggleButton />
    <br />
    <Address street="871 East 8th" city="Brooklyn, NY" />
  </div>,
  document.getElementById('root')
);
