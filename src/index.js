import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import BreedProvider from './components/state/BreedProvider';
import ThemeProvider from './components/state/ThemeProvider';
import './index.css';

ReactDOM.render(
  <BreedProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BreedProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
