import ReactDOM from 'react-dom/client';
import './app/styles/global.scss';
import './app/styles/normalize.scss';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './app/providers/AppRouter';
import { StoreProvider } from 'app/providers/storeProvider';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
   <StoreProvider>
      <RouterProvider router={AppRouter} />
   </StoreProvider>,
);
