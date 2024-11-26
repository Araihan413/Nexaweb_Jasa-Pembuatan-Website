import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { FaQuestionCircle } from 'react-icons/fa';

const Question = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="text-center pb-20">
          <h1 className="font-judul text-4xl font-semibold">Pertanyaan yang Sering Diajukan</h1>
        </div>
        <div className="w-3/4">
          <div className="pb-4 border-b-2">
            <div className=" pt-4 pb-2 flex items-start justify-between cursor-pointer">
              <div className="flex items-start">
                <div className="mr-4">
                  <FaQuestionCircle />
                </div>
                <h1 className="font-subJudul font-semibold text-xl pr-8 leading-none">Apakah Nexaweb bisa membantu saya memilih domain dan hosting ?</h1>
              </div>
              <div className="">
                <IoIosArrowDown />
              </div>
            </div>
            <div className="pt-2 pl-8">
              <p className="font-paragraf">Kami bisa membuat berbagai jenis website, seperti: Website bisnis, Toko online, Blog personal, Portofolio, dan Website custom sesuai kebutuhan Anda</p>
            </div>
          </div>
          <div className="pb-4 border-b-2">
            <div className=" pt-4 pb-2 flex items-start justify-between cursor-pointer">
              <div className="flex items-start">
                <div className="mr-4">
                  <FaQuestionCircle />
                </div>
                <h1 className="font-subJudul font-semibold text-xl pr-8 leading-none">Apakah Nexaweb bisa membantu saya memilih domain dan hosting ?</h1>
              </div>
              <div className="">
                <IoIosArrowDown />
              </div>
            </div>
            <div className="pt-2 pl-8">
              <p className="font-paragraf">Kami bisa membuat berbagai jenis website, seperti: Website bisnis, Toko online, Blog personal, Portofolio, dan Website custom sesuai kebutuhan Anda</p>
            </div>
          </div>
          <div className="pb-4 border-b-2">
            <div className=" pt-4 pb-2 flex items-start justify-between cursor-pointer">
              <div className="flex items-start">
                <div className="mr-4">
                  <FaQuestionCircle />
                </div>
                <h1 className="font-subJudul font-semibold text-xl pr-8 leading-none">Apakah Nexaweb bisa membantu saya memilih domain dan hosting sffsa uguda assda aysdgau asasg?</h1>
              </div>
              <div className="">
                <IoIosArrowDown />
              </div>
            </div>
            <div className="pt-2 pl-8">
              <p className="font-paragraf">Kami bisa membuat berbagai jenis website, seperti: Website bisnis, Toko online, Blog personal, Portofolio, dan Website custom sesuai kebutuhan Anda</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
