import { motion } from 'framer-motion'

const inView = {
  view: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 100 },
};
const WebsiteOrderFlow = (props) => {
  const { title, titleDescription, description, number, children, icon, order } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-9">
      <div className={`col-span-1 order-3 md:col-span-4 ${order[0]} md:py-20 pb-5 flex justify-center items-center`}>
        <motion.div variants={inView} whileInView="view" initial="hidden" className="rounded-lg p-4 bg-slate-200/20 backdrop-blur shadow-box-glass">
          <h3 className="font-subJudul text-2xl text-center">{titleDescription}</h3>
          <p className="font-paragraf text-center">{description}</p>
          {children}
        </motion.div>
      </div>
      <div
        data-number={number}
        className={`pt-20 md:pt-0 order-1 md:order-2  col-span-1 relative  before:content-[''] before:w-[2px] before:h-full before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:bg-blue-400 after:content-[attr(data-number)] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:z-10 after:bg-blue-400 after:py-1 after:w-8 after:text-center after:rounded-full after:text-white`}></div>

      <div className={`col-span-1 md:col-span-4 order-2 ${order[1]} flex justify-center items-center my-5`}>
        <motion.div variants={inView} whileInView="view" initial="hidden" className=" py-2  flex flex-col items-center w-full ">
          <div className='w-40 h-40 bg-slate-600/40 backdrop-blur rounded-full flex flex-col justify-center items-center p-5'>
            <img className='w-16' src={icon} alt="icon proses order" />
            <p className='font-subJudul font-bold text-white'>Langkah {number}</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-subJdul text-lg font-bold">{title}</h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const TopConnectingLine = () => {
  return (
    <div className="grid grid-cols-9 h-16">
      <div className="col-span-4"></div>
      <div className="col-span-1 relative  before:content-[''] before:w-[2px] before:h-full before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:bg-blue-400 after:content-[''] after:w-3 after:h-3 after:bg-blue-400 after:rounded-full after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 "></div>
      <div className="col-span-4"></div>
    </div>
  );
}


const BottomConnectingLine = () => {
  return (
    <div className="grid grid-cols-9 h-16">
      <div className="col-span-4"></div>
      <div className="col-span-1 relative  before:content-[''] before:w-[2px] before:h-full before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:bg-blue-400 after:z-10 after:content-[''] after:w-3 after:h-3 after:bg-blue-400 after:rounded-full after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 "></div>
      <div className="col-span-4"></div>
    </div>
  );
}

export { WebsiteOrderFlow, TopConnectingLine, BottomConnectingLine };