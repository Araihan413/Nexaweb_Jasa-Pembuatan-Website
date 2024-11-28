import Logo from '../Elements/Logo';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';

const NavbarTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleNavbar = () => {
    const navbar = document.querySelector('.navbar');
    if (isOpen) {
      navbar.classList.toggle('hidden');
      navbar.classList.toggle('flex');
      setIsOpen(!isOpen);
    } else {
      navbar.classList.toggle('hidden');
      navbar.classList.toggle('flex');
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <nav className="flex justify-start items-center lg:p-5 py-2 md:py-5 lg:pb-2 fixed top-0 right-0 left-0 z-50 bg-slate-300 lg:bg-transparent">
        <div className="lg:absolute pl-5 lg:pl-0">
          <Logo />
        </div>
        <div className="w-full flex justify-end lg:justify-center lg:items-center relative">
          <ul className="navbar hidden lg:flex w-screen lg:w-max h-screen md:h-max lg:h-full mt-14 md:mt-16 lg:mt-0 absolute lg:static flex-col lg:flex-row lg:justify-center items-center py-20 gap-6 lg:px-5 lg:p-3 lg:rounded-full bg-gradient-primer text-4xl lg:text-xl font-normal font-subJudul shadow-xl text-white">
            <li>
              <a href="">Beranda</a>
            </li>
            <li>
              <a href="">Layanan</a>
            </li>
            <li>
              <a href="">Cara Order</a>
            </li>
            <li>
              <a href="">Portofolio</a>
            </li>
            <li>
              <a href="">Kontak</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
          <div className="text-4xl lg:hidden p-1 pr-5 lg:pr-0 ">
            <button
              onClick={() => {
                ToggleNavbar();
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
