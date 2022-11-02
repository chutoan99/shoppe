import React from 'react';
import './index.css';
import './Style/grid.css';
import './Style/MAIN.css';
import './Style/index.css';
import './Style/animation.css';
import './Style/responsive.css';
import App from './Routes/Routes';
import store from './redux/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </Router>
  </Provider>
);

reportWebVitals();
