import { motion } from 'framer-motion';

const inView = {
  view: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 100 },
};

export const LineProcess = (props) => {
  const { title, titleDescription, description, number, style = '' } = props;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-9">
        <motion.div variants={inView} whileInView="view" initial="hidden" className="order-2 md:order-1 col-span-1  md:col-span-2 py-2  md:py-5 flex md:justify-start justify-center items-center ">
          <h1 className="font-subJdul text-lg font-bold">{title}</h1>
        </motion.div>
        <div
          data-number={number}
          className={`pt-20 md:pt-0 order-1 md:order-2 col-span-1 relative  before:content-[''] before:w-[2px] before:h-full before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:bg-blue-500 after:content-[attr(data-number)] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:z-10 after:bg-white after:py-1`}></div>
        <div className="col-span-1 md:col-span-6 order-last  px-10 py-5">
          <motion.div variants={inView} whileInView="view" initial="hidden" className={`bg-white border-[1px] rounded-lg shadow-lg p-4 ${style}`}>
            <h3 className="font-subJudul text-lg">{titleDescription}</h3>
            <p className="font-paragraf">{description}</p>
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
        <div className="col-span-2"></div>
        <div className="col-span-1 relative  before:content-[''] before:w-[2px] before:h-full before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:bg-blue-500 after:content-[''] after:w-3 after:h-3 after:bg-blue-500 after:rounded-full after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 "></div>
        <div className="col-span-6"></div>
      </div>
    </>
  );
};

export const LineProcessEnd = () => {
  return (
    <>
      <div className="grid grid-cols-9 h-16">
        <div className="col-span-2"></div>
        <div className="col-span-1 relative  before:content-[''] before:w-[2px] before:h-full before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:bg-blue-500 after:z-10 after:content-[''] after:w-3 after:h-3 after:bg-blue-500 after:rounded-full after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 "></div>
        <div className="col-span-6"></div>
      </div>
    </>
  );
};
