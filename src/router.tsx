import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { SpinLoad } from './components';
import { AboutMe } from './pages';

const Projects = lazy(() => import('./pages/Projects'));
const Home = lazy(() => import('./pages/Home'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={<SpinLoad />}>
      <Home />
    </Suspense>,
  },
  {
    path: 'sobre',
    element: <AboutMe />,
  },
  {
    path: 'projetos',
    element: <Suspense fallback={<SpinLoad />}>
      <Projects />
    </Suspense>,
  }
]);
