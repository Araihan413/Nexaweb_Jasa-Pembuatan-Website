import { motion } from 'framer-motion';
import { LineProcess, LineProcessStart, LineProcessEnd } from '../Elements/LineProcess';
import dataWebsiteCreation from '../dataContent/prosesBuatWebsite.json';

const steps = dataWebsiteCreation.data;

const ProcessOrder = () => {
  const fromButton = {
    isView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    isHidden: { opacity: 0, y: 50 },
  };

  return (
    <>
      <div>
        <div className="pb-12 flex flex-col items-center">
          <motion.h1 variants={fromButton} whileInView="isView" initial="isHidden" viewport={{ once: true }} className="font-judul text-4xl font-semibold mb-2 text-center">
            Proses Pembuatan Website Di Nexaweb
          </motion.h1>
          <motion.p variants={fromButton} whileInView="isView" initial="isHidden" viewport={{ once: true }} className="font-paragraf max-w-[600px] text-center">
            Dalam pengerjaan website di Nexaweb kami akan melakukan tahapan yang transparan agar memudahkan klien mengetahui apa yang sedang dikerjakan.
          </motion.p>
        </div>
        <article className="flex flex-col justify-start md:justify-normal items-center md:items-stretch">
          <LineProcessStart></LineProcessStart>
          {steps.map((step) => {
            return <LineProcess key={step.id} number={step.id} title={step.title} titleDescription={step.titleDescription} description={step.description} style="max-w-96"></LineProcess>;
          })}
          <LineProcessEnd></LineProcessEnd>
        </article>
      </div>
    </>
  );
};

export default ProcessOrder;
