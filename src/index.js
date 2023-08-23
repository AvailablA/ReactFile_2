import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
  <h1>NETFLIX Series</h1>
  <p> Top 5 web-series</p>
  <ol>
    <li>Dark</li>
    <li>The Lincon Lawyer</li>
    <li>Jack Rayan</li>
    <li>Naruto</li>
    <li>Missin Impossible</li>
  </ol>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
