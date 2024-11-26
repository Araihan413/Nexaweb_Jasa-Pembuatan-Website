import Button from './Button';
import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';

const CardPrice = () => {
  const [fitur, setFitur] = useState(['5 Halaman', '5 Hari Pengerjaan', '1x Revisi', '1 SEO Keyword', '5 page SEO Dasar', '10 Upload Setup Gambar', '+3 Akun Email', 'GRATIS! SSL', 'GRATIS! DOMAIN .COM/CO.ID', 'Mobile Friendly']);
  return (
    <>
      <div className="bg-[#D4F6FF] flex flex-col justify-center items-center rounded-lg p-5 w-1/3 shadow-lg">
        <div className="text-center pb-4">
          <h2 className="font-semibold text-xl font-subJudul">Paket Sultan</h2>
          <h1 className="font-semibold text-4xl font-subJudu relative -mr-6 before:content-['Rp.'] before:absolute before:top-0 before:-left-6 before:text-base after:content-['/thn'] after:text-base after:text-[#1978d4]">5.000.000</h1>
        </div>
        <div className="text-start w-full pb-4">
          <ul>
            {fitur &&
              fitur.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-2 pb-2">
                    <FaCheck className="text-[#43db35]" />
                    <span>{item}</span>
                  </li>
                );
              })}
          </ul>
        </div>
        <Button warna="bg-[#1978d4]" style="text-white">
          Pesan Paket
        </Button>
      </div>
    </>
  );
};

export default CardPrice;
