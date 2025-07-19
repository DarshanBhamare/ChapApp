import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // ✅ Correct
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './context/AuthProvider.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root')); // ✅ create root
root.render(
  <BrowserRouter>
  <AuthProvider>
      <App />
    </AuthProvider>
    </BrowserRouter>
);
