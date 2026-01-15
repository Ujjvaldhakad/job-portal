import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FilterJobsProvider } from './hooks/FilterJobsProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/'>
    <FilterJobsProvider>
      <App />
    </FilterJobsProvider>
  </BrowserRouter>
);
