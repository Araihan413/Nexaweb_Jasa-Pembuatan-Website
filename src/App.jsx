import Home from './components/pages/home';
import ContactPage from './components/pages/contactPage';
import MethodOrderPage from './components/pages/methodOrderPage';
import ServicePage from './components/pages/servicePage';
import ErrorPage from './components/pages/errorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AnimatePointer from './components/Elements/AnimatePointer';
import ProgresBar from './components/Elements/ProgresBar';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/layanan',
      element: <ServicePage />,
    },
    {
      path: '/cara order',
      element: <MethodOrderPage />,
    },
    {
      path: '/kontak',
      element: <ContactPage />,
    },
    {
      path: '*',
      element: <ErrorPage />,
    },
  ]);

  return (
    <>
      <div className="w-full relative overflow-hidden scroll-smooth">
        <AnimatePointer />
        <RouterProvider router={router} />
        <ProgresBar />
      </div>
    </>
  );
}

export default App;
