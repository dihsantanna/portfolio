import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'sobre',
        element: <div>Sobre</div>,
      },
      {
        path: 'projetos',
        element: <div>Projetos</div>,
      }
    ]
  },
]);
