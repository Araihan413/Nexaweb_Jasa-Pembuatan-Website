import { motion } from 'framer-motion';
import { LineProcess, LineProcessStart, LineProcessEnd } from '../Elements/LineProcess';
import dataContent from '../dataContent/prosesOrder.json';

const ProcessOrder = () => {
  const inView = {
    view: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };

  const steps = dataContent.data.prosesOrder;

  return (
    <>
      <div>
        <div className="pb-12 flex flex-col items-center">
          <motion.h1 variants={inView} whileInView="view" initial="hidden" className="font-judul text-4xl font-semibold mb-2 text-center">
            Proses Pemesanan Website Di Nexaweb
          </motion.h1>
          <motion.p variants={inView} whileInView="view" initial="hidden" className="font-paragraf max-w-[600px] text-center">
            Kami membuat pemesanan jasa pembuatan website menjadi mudah dan transparan. Ikuti langkah berikut untuk mewujudkan website impian Anda bersama Nexaweb:
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
