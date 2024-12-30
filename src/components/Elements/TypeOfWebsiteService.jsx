import icon from '../../assets/icons/animate.png'
import img from '../../assets/image/web-bisnis.png'

const TypeOfWebsiteService = () => {
  // const { id, title, description, icon } = props
  return (
    <>
      <div className="flex shadow-lg rounded-xl rounded-tl-none w-full md:w-96 h-max relative px-6 pb-10 bg-slate-200/40 backdrop-blur-sm bg-center">
        {/* <div className="top-0 left-0 w-80 -z-10">
          <img className="" src={img} alt="foto design web bisnis" />
        </div> */}

        <div className='w-max p-5 p flex justify-center items-center rounded-xl absolute -top-10 left-0'>
          <div className='w-full absolute top-0 rounded-t-lg p-5 -z-30  bg-slate-200/40 backdrop-blur-sm'></div>
          <img className='w-16 h-16' src={icon} alt="" />
        </div>
        <div className=" w-full h-full pt-5">
          <h1 className="font-judul text-2xl font-semibold pl-24 pb-5">Website Bisnis</h1>
          <p className='font-paragraf font-semibold'>Cocok untuk menampilkan karya, profil, dan perjalanan karier Anda secara profesional.</p>
        </div>

      </div>
    </>
  )
}

export default TypeOfWebsiteService