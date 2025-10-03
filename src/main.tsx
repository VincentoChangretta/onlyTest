import ReactDOM from 'react-dom/client';
import './app/styles/global.scss';
import './app/styles/normalize.scss';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './app/providers/AppRouter';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(<RouterProvider router={AppRouter} />);
