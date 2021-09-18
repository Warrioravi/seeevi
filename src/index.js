import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import detailsReducer from './redux/reducers/detailsReducer';



let myStore= createStore(detailsReducer);
ReactDOM.render(
     <Provider store={myStore}>
     <App />
   </Provider>,
document.getElementById('root')
);


