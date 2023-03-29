import { StrictMode } from 'react';
import { HttpClientProvider } from '@context/HttpClientContext';
import ReactDOM from 'react-dom/client';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <HttpClientProvider>
      <App />
    </HttpClientProvider>
  </StrictMode>
);
