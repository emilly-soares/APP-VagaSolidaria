import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import GlobalStyle from './globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>

    <HelmetProvider>

      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" />
      </Helmet>

      <GlobalStyle />

      <App />

    </HelmetProvider>

  </React.StrictMode>
);
