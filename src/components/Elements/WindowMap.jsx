const WindowMap = () => {
  return (
    <>
      <div className="rounded-3xl h-full w-full  border-2 overflow-hidden ">
        <div className="relative h-full w-full">
          <iframe
            className="w-full h-full border-0 absolute"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.386422268144!2d110.28285637393954!3d-7.787814377280559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af70072c21235%3A0x8d8a7f36cf85ff73!2sPenyedia%20Web%20Jogja!5e1!3m2!1sid!2sid!4v1732787932658!5m2!1sid!2sid"
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
