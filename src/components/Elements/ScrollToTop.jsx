import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Mengambil lokasi URL saat ini

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas setiap kali path berubah
  }, [pathname]);

  return null; // Komponen ini tidak merender apa pun
};

export default ScrollToTop;
