import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// > css
import '@/styles/style.css';
// > components
import App from '@/App.jsx';
// import Template from '@/components/Template.jsx';

const rootNode = document.getElementById('react-app');
createRoot(rootNode).render(
  <StrictMode>
    <App />
    {/* <Template /> */}
  </StrictMode>
);