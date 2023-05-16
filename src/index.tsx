import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import Theme from './components/Theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider theme={Theme} direction="ltr">
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

reportWebVitals();
