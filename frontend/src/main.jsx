import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';  // You're already importing createRoot
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// Use createRoot directly as you imported it
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
