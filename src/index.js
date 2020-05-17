import React from 'react';
import ReactDOM from 'react-dom';
import CompareProduct from './CompareProduct/containers/CompareProduct';
import configureStore from './store';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}><CompareProduct /></Provider>, 
    document.getElementById('root')
);