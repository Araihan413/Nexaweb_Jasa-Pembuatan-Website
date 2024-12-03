import { useState, useEffect } from 'react';

const TextChange = () => {
  const text = ['Impian', 'Responsif', 'Profesional', 'Modern'];
  const [textChange, setTextChange] = useState(text[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % text.length;
      setTextChange(text[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <span>{textChange}</span>
    </>
  );
};

export default TextChange;
