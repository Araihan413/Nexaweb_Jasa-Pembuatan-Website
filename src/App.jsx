import Home from './components/pages/home';
// import BlogPage from './components/pages/blogPage';
import ContactPage from './components/pages/contactPage';
import MethodOrderPage from './components/pages/methodOrderPage';
import ServicePage from './components/pages/servicePage';
import ErrorPage from './components/pages/errorPage';
import { useFollowPointer } from './components/Elements/use-follow-pointer';
import { useRef } from 'react';

import { motion, useScroll, useSpring } from 'framer-motion';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const pointerRef = useRef(null);
  const { x, y } = useFollowPointer(pointerRef);

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
      path: '/contact',
      element: <ContactPage />,
    },
    // {
    //   path: '/blog',
    //   element: <BlogPage />,
    // },
    {
      path: '*',
      element: <ErrorPage />,
    },
  ]);

  return (
    <>
      <div className="w-full relative overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, display: 'none' }}
          animate={{ display: 'block', opacity: 1, transition: { duration: 1, delay: 1.5 } }}
          ref={pointerRef}
          style={{ x, y }}
          className="w-40 h-40 rounded-full bg-gradient-kursor blur-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-50]"></motion.div>

        <RouterProvider router={router} />
        <motion.div style={{ scaleX }} className="z-50 bottom-0 left-0 right-0 fixed w-full h-2 bg-gradient-primer origin-bottom-left"></motion.div>
      </div>
    </>
  );
}

export default App;
