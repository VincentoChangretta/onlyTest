import { App } from '../../../App';
import { MainPage } from 'pages/MainPage';
import { createBrowserRouter } from 'react-router-dom';

export const AppRouter = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [{ path: '', element: <MainPage /> }],
   },
]);
