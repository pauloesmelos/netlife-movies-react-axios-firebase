import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App.jsx';
import './css/tailwind.css';
import { GlobalSavedMoviesProvider } from './global/saved-movies/GlobalSavedMovies.jsx';
import { GlobalSearchNavProvider } from './global/search-navbar/GlobalSearchNav.jsx';
import { GlobalUserProvider } from './global/user/GlobalUser.jsx';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalUserProvider>
        <GlobalSearchNavProvider>
          <GlobalSavedMoviesProvider>
            <App />
          </GlobalSavedMoviesProvider>
        </GlobalSearchNavProvider>
      </GlobalUserProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)