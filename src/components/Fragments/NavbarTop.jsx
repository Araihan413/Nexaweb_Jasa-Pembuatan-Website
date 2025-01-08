import Logo from '../Elements/Logo';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';


const NavbarTop = () => {
  const [showElemen, setShowElemen] = useState(window.innerWidth >= 1024);

  const handleDelete = () => {
    setShowElemen(!showElemen);
  };
  const navigate = useNavigate();
  const handleNavigation = (id) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const toggle = {
    hidden: { opacity: 0, x: 500, transition: { duration: 0.3 } },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <nav className="flex justify-start items-center lg:p-5 py-2 md:py-5 lg:pb-2 fixed top-0 right-0 left-0 z-50 bg-slate-200 lg:bg-transparent">
        <div onClick={() => handleNavigation('home')} className="lg:absolute pl-5 lg:pl-0 z-50 cursor-pointer">
          <Logo />
        </div>
        <div className="w-full flex justify-end lg:justify-center lg:items-center relative">
          <AnimatePresence>
            {showElemen && (
              <motion.div
                variants={toggle}
                initial={window.innerWidth >= 1024 ? '' : 'hidden'}
                animate={window.innerWidth >= 1024 ? '' : 'show'}
                exit={{ opacity: 0, x: 500, transition: { duration: 0.3 } }}
                className="flex lg:flex w-screen lg:w-max h-screen md:h-[50vh] lg:h-full mt-14 md:mt-16 lg:mt-0 absolute lg:static  py-20 gap-6 lg:px-16 lg:p-3 lg:rounded-full lg:bg-gradient-primer bg-slate-700/80 backdrop-blur shadow-xl text-white">
                <ul className="h-full w-full flex-col lg:flex-row flex items-center gap-6 text-4xl lg:text-xl font-normal font-subJudul text-white">
                  <li className='hover:scale-110 hover:-translate-y-1 transition ease-in-out'>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">
                      Beranda
                    </NavLink>
                  </li>
                  <li className='hover:scale-110 hover:-translate-y-1 transition ease-in-out'>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/layanan">
                      Layanan
                    </NavLink>
                  </li>
                  <li className='hover:scale-110 hover:-translate-y-1 transition ease-in-out'>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/cara order">
                      Cara Order
                    </NavLink>
                  </li>
                  <li className='hover:scale-110 hover:-translate-y-1 transition ease-in-out'>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/kontak">
                      Kontak
                    </NavLink>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="text-4xl lg:hidden p-1 pr-5 lg:pr-0 ">
            <button
              onClick={() => {
                handleDelete();
              }}>
              <HiMenuAlt3 />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarTop;
