import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { FaQuestionCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQItem = (props) => {
  const { question, answer } = props
  const [open, setOpen] = useState(false);
  const fromRight = {
    isView: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    isHidden: { opacity: 0, x: 50 },
  };
  return (
    <>
      <div className="pb-4 border-b-2">
        <div onClick={() => setOpen(!open)} className=" pt-4 pb-2 flex items-start justify-between cursor-pointer">
          <div className="flex items-start">
            <div className="mr-4">
              <FaQuestionCircle />
            </div>
            <motion.h1 variants={fromRight} whileInView="isView" initial="isHidden" viewport={{ once: true }} className="font-subJudul font-semibold text-xl pr-8 leading-none">{question}</motion.h1>
          </div>
          <div>{open ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
        </div>
        <motion.div animate={{ height: open ? 'auto' : '0', transition: { ease: 'easeInOut' } }} initial={{ height: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="overflow-hidden">
          <div className='pt-2 pl-8'>
            {Array.isArray(answer) ?
              answer.map((item, index) => <p key={index} className="font-paragraf">{item}</p>)
              :
              <p className="font-paragraf">{answer}</p>}

          </div>
        </motion.div>

      </div>
    </>
  )
}


export default FAQItem