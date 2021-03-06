import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

// == REDUX
import { store } from './redux/store';
import { Provider } from 'react-redux';

// == ROUTER
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
