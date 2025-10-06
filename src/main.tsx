import ReactDOM from 'react-dom/client';
import './app/styles/global.scss';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './app/providers/AppRouter';
import { StoreProvider } from 'app/providers/storeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
   <ErrorBoundary>
      <StoreProvider>
         <RouterProvider router={AppRouter} />
      </StoreProvider>
   </ErrorBoundary>,
);
