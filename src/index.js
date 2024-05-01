import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './globalstyles.js';
import Routes from './routes.js'
// import Second from './second';

// import App from './home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Routes/>
    <GlobalStyles/>
  </React.StrictMode>
);


