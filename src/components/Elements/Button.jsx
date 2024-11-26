const Button = (props) => {
  const { warna, children, style = '' } = props;
  return (
    <>
      <div className="w-max h-max">
        <button className={`p-4 py-2 ${warna} ${style} rounded-xl border-2 font-semibold shadow-md`}>{children}</button>
      </div>
    </>
  );
};

export default Button;
