import Logo from '../Elements/Logo';

const NavbarTop = () => {
  return (
    <>
      <nav className="flex bg-sky-300 justify-start items-center p-5 pb-2 fixed top-0 right-0 left-0 z-50">
        <div className="absolute">
          <Logo />
        </div>
        <div className="w-full flex justify-center items-center">
          <ul className="flex justify-center items-center gap-6 px-5 p-3 rounded-full bg-pink-200 text-xl font-normal font-subJudul">
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
        </div>

        {/* <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
*/}
      </nav>
    </>
  );
};

export default NavbarTop;
