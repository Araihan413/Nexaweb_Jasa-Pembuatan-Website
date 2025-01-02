import { motion } from 'framer-motion';
import FAQItem from '../Elements/FAQItem';
import dataFAQ from '../dataContent/pertanyaan.json'

const listQuestion = dataFAQ.data
const Question = () => {
  const inView = {
    view: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <motion.div variants={inView} whileInView="view" initial="hidden" className="text-center pb-20">
          <h1 className="font-judul text-4xl font-semibold">Pertanyaan yang Mungkin Dikepokan</h1>
        </motion.div>
        <div className="lg:w-5/6 w-full bg-slate-200/20 backdrop-blur p-2 md:p-5">

          {listQuestion.map((item, index) => {
            return <FAQItem key={index} question={item.question} answer={item.answer} />

          })}

        </div>
      </div>
    </>
  );
};

export default Question;
