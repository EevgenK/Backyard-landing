import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import Layout from './components/Layout.tsx';
import { ModalProvider } from './components/shared/shared/ModalContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <Layout />
    </ModalProvider>
  </StrictMode>,
);
