import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './contexts/ProviderContext';
import App from './App';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ContextProvider>
          <App />
        </ContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
