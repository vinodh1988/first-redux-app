import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  {AppConnected} from './Redux/connectedComponents/AppConnected'
import {Provider} from "react-redux";
import {createStore} from 'redux';
import {appstate} from  './Redux/reducers/combine'
import * as serviceWorker from './serviceWorker';


const store=createStore(appstate)


ReactDOM.render(
  <Provider store={store}>
    <AppConnected/>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
