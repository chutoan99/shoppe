import './input.css';
import './Style/grid.css';
import './Style/MAIN.css';
import './Style/index.css';
import './Style/animation.css';
import './Style/responsive.css';
import App from './Routes/Routes';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
const queryClient = new QueryClient();
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Router>
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode> */}
      </Router>
    </Provider>
  </QueryClientProvider>
);

reportWebVitals();
