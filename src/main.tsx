
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/toaster';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/theme/theme-provider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="solio-ui-theme">
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <App />
          <Toaster />
        </HelmetProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
