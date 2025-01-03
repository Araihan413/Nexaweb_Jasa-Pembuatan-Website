import WindowMap from '../Elements/WindowMap';
import Logo from '../Elements/Logo';
import { GrMap } from 'react-icons/gr';
import { IoMdArrowDropright } from 'react-icons/io';
import { FaLinkedin, FaInstagramSquare, FaFacebook, FaRegCopyright } from 'react-icons/fa';
import { AiFillTikTok } from 'react-icons/ai';
const whatsappLink = 'https://wa.me/628113734445'
const mapsLink = 'https://maps.app.goo.gl/CLQ1591wTvn4Js2JA'
const mailLink = "mailto:arraihan0104@gmail.com"
import { Link } from 'react-router-dom';

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
              "Nexaweb adalah penyedia jasa pembuatan website yang berkomitmen untuk menghadirkan solusi digital terbaik. Kami percaya bahwa setiap website harus menjadi representasi unik dari brand atau ide Anda."
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
              <p className="font-Paragraf">Tlogo, Ambarketawang, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex flex-col items-start pt-8 md:pt-0 md:pl-8">
          <div className="pb-8">
            <h1 className="font-SubJudul font-semibold text-xl pb-4">Navigasi Menu</h1>
            <ul className="font-Paragraf">
              <li>
                <Link className="flex gap-2 leading-none p-2 pl-0" to="/">
                  <IoMdArrowDropright /> Beranda
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 leading-none p-2 pl-0" to="/">
                  <IoMdArrowDropright /> Tentang Kami
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 leading-none p-2 pl-0" to="/layanan">
                  <IoMdArrowDropright /> Layanan
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 leading-none p-2 pl-0" to="/cara order">
                  <IoMdArrowDropright /> Proses Order
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 leading-none p-2 pl-0" to="/">
                  <IoMdArrowDropright /> Portofolio
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 leading-none p-2 pl-0" to="/">
                  <IoMdArrowDropright /> Testimoni
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 leading-none p-2 pl-0" to="/">
                  <IoMdArrowDropright /> Pertanyaan
                </Link>
              </li>
              <li>
                <Link className="flex gap-2 leading-none p-2 pl-0" to="/contact">
                  <IoMdArrowDropright /> Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-SubJudul text-xl font-semibold pb-4">Kontak Kami</h1>
            <p className="font-paragraf">
              <span className="font-bold font-subJudul text-lg">Email : </span><a target='_blank' href={mailLink}>arraihan0104@gmail.com</a>
            </p>
            <p className="font-paragraf">
              <span className="font-bold font-subJudul text-lg">Telepon : </span> <a target='_blank' href={whatsappLink}>+62 811-3734-445</a>
            </p>
            <p className="font-paragraf">
              <span className="font-bold font-subJudul text-lg">Alamat : </span> <a target='_blank' href={mapsLink}>Tlogo, Ambarketawang, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta.</a>
            </p>
            <p className="font-paragraf">
              <span className="font-bold font-subJudul text-lg">Jam Operasi : </span> Senin - Sabtu, 24 jam.
            </p>
          </div>
        </div>

        <div className="col-span-1 flex flex-col items-start pt-8 md:pt-0 md:pl-8">
          <div className="pb-8">
            <h1 className="font-SubJudul text-xl font-semibold pb-4">Ikuti Sosmed</h1>
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
            <h1 className="font-SubJudul text-xl font-semibold pb-2">Kunjungi Artikel Luar</h1>
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
            Copyright <FaRegCopyright /> 2023 Nexaweb. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
