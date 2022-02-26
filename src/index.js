import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
/*_____REDUX________*/
import store from './reduxToolkit/store.js'
import {Provider} from 'react-redux';


/*_____REDUX________*/

ReactDOM.render(
  <React.StrictMode>
   
   <BrowserRouter>
    <Provider  store={store}>
      <App />
    </Provider>
   </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);

