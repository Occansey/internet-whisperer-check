
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/toaster';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/theme/theme-provider';
import { TranslationProvider } from './contexts/TranslationContext';

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
    <TranslationProvider>
      <ThemeProvider defaultTheme="light" storageKey="solio-ui-theme">
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <App />
            <Toaster />
          </HelmetProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </TranslationProvider>
  </React.StrictMode>
);
