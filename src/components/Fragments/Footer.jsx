import WindowMap from '../Elements/WindowMap';
import Logo from '../Elements/Logo';
import { GrMap } from 'react-icons/gr';
import { IoMdArrowDropright } from 'react-icons/io';
import { FaLinkedin, FaInstagramSquare, FaFacebook, FaRegCopyright } from 'react-icons/fa';
import { AiFillTikTok } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 text-white">
        <div className="col-span-1 flex flex-col items-start pr-8">
          <div className="flex gap-5 items-end pb-4">
            <Logo></Logo>
            <h1 className="text-2xl font-SubJudul font-bold text-white">Nexaweb</h1>
          </div>
          <div className="text-white pb-8">
            <h1 className="font-SubJudul font-semibold text-xl pb-4">Tentang Kami</h1>
            <p className="font-Paragraf">
              "Nexaweb adalah penyedia jasa pembuatan website profesional yang berkomitmen untuk menghadirkan solusi digital terbaik. Kami percaya bahwa setiap website harus menjadi representasi unik dari brand atau ide Anda."
            </p>
          </div>
          <div className=" mb-8 h-52 w-full">
            <WindowMap></WindowMap>
          </div>
          <div>
            <h1 className="font-SubJudul font-semibold text-xl pb-4">Wilayah Yogyakarta</h1>
            <div className="flex gap-4">
              <div className="w-12 pt-1">
                <GrMap></GrMap>
              </div>
              <p className="font-Paragraf">Jl. Kesumuk Sawo, Puluhan, Argomulyo, Kec. Sedayu, Kabupaten Bantul, Daerah Istimewa Yogyakarta, Indonesia</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex flex-col items-start pt-8 md:pt-0 md:pl-8">
          <div className="pb-8">
            <h1 className="font-SubJudul font-semibold text-xl pb-4">Navigasi Menu</h1>
            <ul className="font-Paragraf">
              <li>
                <a className="flex gap-2 leading-none p-2 pl-0" href="">
                  <IoMdArrowDropright /> Beranda
                </a>
              </li>
              <li>
                <a className="flex gap-2 leading-none p-2 pl-0" href="">
                  <IoMdArrowDropright /> Tentang Kami
                </a>
              </li>
              <li>
                <a className="flex gap-2 leading-none p-2 pl-0" href="">
                  <IoMdArrowDropright /> Layanan
                </a>
              </li>
              <li>
                <a className="flex gap-2 leading-none p-2 pl-0" href="">
                  <IoMdArrowDropright /> Proses Order
                </a>
              </li>
              <li>
                <a className="flex gap-2 leading-none p-2 pl-0" href="">
                  <IoMdArrowDropright /> Portofolio
                </a>
              </li>
              <li>
                <a className="flex gap-2 leading-none p-2 pl-0" href="">
                  <IoMdArrowDropright /> Testimoni
                </a>
              </li>
              <li>
                <a className="flex gap-2 leading-none p-2 pl-0" href="">
                  <IoMdArrowDropright /> Pertanyaan
                </a>
              </li>
              <li>
                <a className="flex gap-2 leading-none p-2 pl-0" href="">
                  <IoMdArrowDropright /> Kontak
                </a>
              </li>
              <li>
                <a className="flex gap-2 leading-none p-2 pl-0" href="">
                  <IoMdArrowDropright /> Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-SubJudul text-xl font-semibold pb-4">Kontak Kami</h1>
            <p className="font-paragraf">
              <span className="font-bold font-subJudul text-lg">Email : </span> info@nexaweb.com
            </p>
            <p className="font-paragraf">
              <span className="font-bold font-subJudul text-lg">Telepon : </span> +62 811-3734-445
            </p>
            <p className="font-paragraf">
              <span className="font-bold font-subJudul text-lg">Alamat : </span> Jl. Kesumuk Sawo, Puluhan, Argomulyo, Kec. Sedayu, Kabupaten Bantul, Daerah Istimewa Yogyakarta, Indonesia
            </p>
            <p className="font-paragraf">
              <span className="font-bold font-subJudul text-lg">Jam Operasi : </span> Senin - Jumat, 09:00 - 18:00 WIB
            </p>
          </div>
        </div>

        <div className="col-span-1 flex flex-col items-start pt-8 md:pt-0 md:pl-8">
          <div className="pb-8">
            <h1 className="font-SubJudul text-xl font-semibold pb-4">Ikuti Kami</h1>
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold">
                <a href="">
                  <div className="font-Paragraf flex gap-2">
                    <p className="text-2xl">
                      <FaLinkedin />
                    </p>
                    Linkin
                  </div>
                </a>
              </h3>
              <h3 className="font-semibold">
                <a href="">
                  <div className="font-Paragraf flex gap-2">
                    <p className="text-2xl">
                      <FaInstagramSquare />
                    </p>
                    Instagram
                  </div>
                </a>
              </h3>
              <h3 className="font-semibold">
                <a href="">
                  <div className="font-Paragraf flex gap-2">
                    <p className="text-2xl">
                      <FaFacebook />
                    </p>
                    Facebook
                  </div>
                </a>
              </h3>
              <h3 className="font-semibold">
                <a href="">
                  <div className="font-Paragraf flex gap-2">
                    <p className="text-2xl">
                      <AiFillTikTok />
                    </p>
                    Tiktok
                  </div>
                </a>
              </h3>
            </div>
          </div>
          <div>
            <h1 className="font-SubJudul text-xl font-semibold pb-2">Kunjungi Artikel</h1>
            <ul className="font-Paragraf">
              <li>
                <a className="flex gap-2 p-2 pl-0" href="">
                  <div className="pt-1">
                    <IoMdArrowDropright />
                  </div>
                  <p>Kenapa Kita Harus Mempunyai Website Untuk Bisnis Kita?</p>
                </a>
              </li>
              <li>
                <a className="flex gap-2  p-2 pl-0" href="">
                  <div className="pt-1">
                    <IoMdArrowDropright />
                  </div>
                  <p>Apakah Penting Mendigitalisasi Bisnis Kita?</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col col-span-1 md:col-span-3 pt-5 mt-8 border-t-2">
          <p className="font-Paragraf flex items-center justify-center leading-none gap-2">
            Copyright <FaRegCopyright /> 2022 Nexaweb. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
