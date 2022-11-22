import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createInstance, HackleProvider } from "@hackler/react-sdk";
import App from './App';

const hackleClient = createInstance("4CcBnRoIwkxIos7TDZNneHzyeY4nwEw9")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HackleProvider hackleClient={hackleClient}>
      <App />
    </HackleProvider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
