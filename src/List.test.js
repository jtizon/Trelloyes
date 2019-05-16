import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

it('renders without crashing', () => {
  const sec = document.createElement('section');
  ReactDOM.render(<List />, sec);
  ReactDOM.unmountComponentAtNode(sec);
});