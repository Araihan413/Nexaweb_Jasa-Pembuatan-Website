export const FormContact = (props) => {
  const { id, children, type, placeholder, style = '', required } = props;
  return (
    <>
      <div className={` ${style} px-2 flex flex-col gap-2 pb-5`}>
        <label className={`font-semibold font-subJudul ${required ? 'after:content-["*"] after:text-sm after:text-red-400 after:pl-1' : ''}`} htmlFor={id}>
          {children}
        </label>
        <input required={required} id={id} name={id} className="rounded-md py-2 px-2" type={type} placeholder={placeholder} />
      </div>
    </>
  );
};

export const FormTextarea = (props) => {
  const { id, children, placeholder, style = '', required } = props;
  return (
    <>
      <div className={` ${style} px-2 flex flex-col gap-2 pb-5`}>
        <label className={`font-semibold font-subJudul ${required ? 'after:content-["*"] after:text-sm after:text-red-400 after:pl-1' : ''}`} htmlFor={id}>
          {children}
        </label>
        <textarea required={required} rows="2" id={id} name={id} className="rounded-md py-2 px-2" placeholder={placeholder} />
      </div>
    </>
  );
};
