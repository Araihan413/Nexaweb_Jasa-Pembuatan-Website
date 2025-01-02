import { motion } from 'framer-motion';

const Button = (props) => {
  const { type = 'button', warna, children, style = '', onClick = () => { } } = props;

  return (
    <>
      <div className="w-full flex justify-center items-center h-max">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} type={type} onClick={() => onClick()} className={`p-4 py-3 ${warna} ${style} rounded-xl font-semibold shadow-md`}>{children}</motion.button>
      </div>
    </>
  );
};

export default Button;
