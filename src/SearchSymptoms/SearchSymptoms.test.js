import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import SearchSymptoms from './SearchSymptoms';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><SearchResults /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});