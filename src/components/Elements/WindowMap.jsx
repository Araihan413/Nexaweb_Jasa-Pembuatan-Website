const WindowMap = () => {
  return (
    <>
      <div className="rounded-3xl h-full w-full  border-2 overflow-hidden ">
        <div className="relative h-full w-full">
          <iframe
            className="w-full h-full border-0 absolute"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12784.907937444163!2d110.3189663!3d-7.808683199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af9007d305009%3A0x1de5c4246cf42e6a!2sNexaWeb%20-%20jasa%20pembuatan%20website!5e1!3m2!1sid!2sid!4v1735811412414!5m2!1sid!2sid"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"></iframe>
        </div>
      </div>
    </>
  );
};

export default WindowMap;
