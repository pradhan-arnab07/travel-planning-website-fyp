import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {DataProvider} from './components/layouts/DataContext'
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
reportWebVitals();
