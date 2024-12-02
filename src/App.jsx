import Home from './components/pages/home';
import BlogPage from './components/pages/blogPage';
import ContactPage from './components/pages/contactPage';
import MethodOrderPage from './components/pages/methodOrderPage';
import PortofolioPage from './components/pages/portofolioPage';
import ServicePage from './components/pages/servicePage';
import ErrorPage from './components/pages/errorPage';

import { motion, useScroll, useSpring } from 'framer-motion';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
      path: '/portofolio',
      element: <PortofolioPage />,
    },
    {
      path: '/contact',
      element: <ContactPage />,
    },
    {
      path: '/blog',
      element: <BlogPage />,
    },
    {
      path: '*',
      element: <ErrorPage />,
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
        <motion.div style={{ scaleX }} className="z-50 bottom-0 left-0 right-0 fixed w-full h-2 bg-gradient-primer origin-bottom-left"></motion.div>
      </div>
    </>
  );
}

export default App;
