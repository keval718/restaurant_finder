import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './Routes/AppRouter';

import './styles/index.css';

const store=configureStore();

const jsx=(
   <Provider store={store} >
        <AppRouter/>
   </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));


