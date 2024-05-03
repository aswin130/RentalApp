
import React from 'react';
import {createRoot} from 'react-dom/client';
import AppRouter from './router/AppRouter.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const root = createRoot(document.getElementById('root'));

root.render(<AppRouter/>); // Replace `<App />



// ReactDOM.render(<AppRouter />, document.getElementById('root'));