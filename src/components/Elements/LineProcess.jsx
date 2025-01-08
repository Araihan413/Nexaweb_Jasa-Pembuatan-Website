import { motion } from 'framer-motion';

const fromButton = {
  isView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  isHidden: { opacity: 0, y: 50 },
};

export const LineProcess = (props) => {
  const { title, titleDescription, description, number, children, style = '' } = props;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-9">
        <div className='order-2 md:order-1 col-span-1 md:col-span-4 md:flex md:justify-end items-center md:py-5 '>
          <motion.div variants={fromButton} whileInView="isView" initial="isHidden" viewport={{ once: true }} className=" py-2 md:py-5 h-max flex  justify-center items-center md:bg-white/20 rounded-lg md:backdrop-blur w-full  max-w-96 md:shadow-box-glass">
            <div className="flex flex-col items-center">
              <h2>Langkah {number}</h2>
              <h1 className="font-subJdul text-lg font-bold">{title}</h1>
            </div>
          </motion.div>
        </div>
        <div
          data-number={number}
          className={`pt-20 md:pt-0 order-1 md:order-2 col-span-1 relative  before:content-[''] before:w-[2px] before:h-full before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:bg-blue-400 after:content-[attr(data-number)] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:z-10 after:bg-white after:py-1 after:w-1/2 after:text-center after:rounded-md`}></div>
        <div className="col-span-1 md:col-span-4 order-last py-5">

          <motion.div variants={fromButton} whileInView="isView" initial="isHidden" viewport={{ once: true }} className={`bg-white/20 backdrop-blur rounded-lg md:shadow-box-glass p-4 ${style}`}>
            <h1 className="font-subJudul text-lg text-center md:text-left">{titleDescription}</h1>
            <p className="font-paragraf text-center md:text-left">{description}</p>
            {children}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export const LineProcessStart = () => {
  return (
    <>
      <div className="grid grid-cols-9 h-16">
        <div className="col-span-4"></div>
        <div className="col-span-1 relative  before:content-[''] before:w-[2px] before:h-full before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:bg-blue-400 after:content-[''] after:w-3 after:h-3 after:bg-blue-400 after:rounded-full after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 "></div>
        <div className="col-span-4"></div>
      </div>
    </>
  );
};

export const LineProcessEnd = () => {
  return (
    <>
      <div className="grid grid-cols-9 h-16">
        <div className="col-span-4"></div>
        <div className="col-span-1 relative  before:content-[''] before:w-[2px] before:h-full before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:bg-blue-400 after:z-10 after:content-[''] after:w-3 after:h-3 after:bg-blue-400 after:rounded-full after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 "></div>
        <div className="col-span-4"></div>
      </div>
    </>
  );
};
