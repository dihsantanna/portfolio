import { createBrowserRouter } from 'react-router-dom';
import { AboutMe, Home } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'sobre',
    element: <AboutMe />,
  },
  {
    path: 'projetos',
    element: <div>Projetos</div>,
  }
]);
