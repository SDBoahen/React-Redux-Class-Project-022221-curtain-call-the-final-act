import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';


  // import redux from 'react-redux'

import { Provider } from 'react-redux'
  import { createStore, compose, applyMiddleware } from 'redux'
  import rootReducer from './redux/reducers'
  import thunk from 'redux-thunk'


  // WE AIN'T USIN' THAAAAT 🗑☄️  
  // import store from './store'
    // import store from './redux/store'    
    //X//  s




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//  T/F  ||  +++  === T

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
  // let store = createStore(rootReducer, composeEnhancers())
  // let store = createStore(rootReducer)
  


ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />,
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
