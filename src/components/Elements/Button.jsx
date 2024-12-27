import { motion } from 'framer-motion';

const Button = (props) => {
  const { warna, children, style = '' } = props;

  return (
    <>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="w-max h-max">
        <button className={`p-4 py-3 ${warna} ${style} rounded-xl font-semibold shadow-md`}>{children}</button>
      </motion.div>
    </>
  );
};

export default Button;
