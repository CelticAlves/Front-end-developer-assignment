import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'


Sentry.init({ dsn: "https://52d04aed80c44c13a7ddcbbf28ab8c8a@sentry.io/1547627" });

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
