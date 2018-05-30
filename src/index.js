import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'containers/App.jsx';
import registerServiceWorker from 'registerServiceWorker';
import AppWithStore from 'store';

ReactDOM.render(AppWithStore(<App />), document.getElementById('root'));
registerServiceWorker();
