import React from 'react';
import './Style/navHomeMobile.css';
import './Style/Header-Cart-List.css';
import './Style/product_Item.css';
import './Style/header_sort-bar.css';
import './Style/header_navbar.css';
import './Style/category-serach.css';
import './Style/category.css';
import './Style/discounts.css';
import './Style/animation.css';
import './Style/pagination.css';
import './Style/container.css';
import './Style/footer.css';
import './Style/header.css';
import './Style/modal.css';
import './Style/grid.css';
import './Style/MAIN.css';
import './Style/responsive.css';
import './Style/home-Filter.css';
import ReactDOM from 'react-dom/client';
import './Style/index.css';
import App from './Routes/Routes';
import store from './redux/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
);
reportWebVitals();
