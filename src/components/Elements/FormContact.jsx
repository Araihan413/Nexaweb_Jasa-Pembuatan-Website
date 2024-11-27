export const FormContact = (props) => {
  const { id, children, type, placeholder, style = '' } = props;
  return (
    <>
      <div className={` ${style} px-2 flex flex-col gap-2 pb-5`}>
        <label className="font-semibold font-subJudul" htmlFor={id}>
          {children}
        </label>
        <input id={id} name={id} className="rounded-md py-2 px-2" type={type} placeholder={placeholder} />
      </div>
    </>
  );
};

export const FormTextarea = (props) => {
  const { id, children, placeholder, style = '' } = props;
  return (
    <>
      <div className={` ${style} px-2 flex flex-col gap-2 pb-5`}>
        <label className="font-semibold font-subJudul" htmlFor={id}>
          {children}
        </label>
        <textarea rows="2" id={id} name={id} className="rounded-md py-2 px-2" placeholder={placeholder} />
      </div>
    </>
  );
};
