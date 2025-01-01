
const TypeOfWebsiteService = (props) => {
  const { title, description, icon } = props
  return (
    <>
      <div className='bg-slate-200 p-2 rounded-xl shadow-lg'>
        <div className='flex gap-5 pl-28 pb-2 pt-2'>
          <div className='w-5 h-5 rounded-full bg-[#16C47F]'></div>
          <div className='w-5 h-5 rounded-full bg-[#FFD65A]'></div>
          <div className='w-5 h-5 rounded-full bg-[#FF9D23]'></div>
        </div>
        <div className="flex rounded-xl rounded-tl-none w-full md:w-96 h-[calc(100%-36px)] relative px-6 pb-8 bg-white bg-center">

          <div className='w-28 h-28 p-5 p flex justify-center items-center rounded-xl absolute -top-10 -left-2 border-8 border-slate-200 bg-white'>
            <div className='w-full absolute top-0 rounded-t-lg p-5 -z-30 '></div>
            <img className='w-full h-full' src={icon} alt="icon jenis website" />
          </div>
          <div className=" w-full h-full pt-5">
            <h1 className="font-judul text-2xl font-semibold pl-24 pb-10">{title}</h1>
            <p className='font-paragraf font-semibold'>{description}</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default TypeOfWebsiteService