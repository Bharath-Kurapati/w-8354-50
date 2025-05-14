
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx'
import './index.css'

// Add preconnect for Google Fonts
const headElement = document.head;
const preconnect1 = document.createElement('link');
preconnect1.rel = 'preconnect';
preconnect1.href = 'https://fonts.googleapis.com';
headElement.appendChild(preconnect1);

const preconnect2 = document.createElement('link');
preconnect2.rel = 'preconnect';
preconnect2.href = 'https://fonts.gstatic.com';
preconnect2.crossOrigin = 'anonymous';
headElement.appendChild(preconnect2);

// Add Inter font with weights 400 and 800
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap';
headElement.appendChild(fontLink);

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
