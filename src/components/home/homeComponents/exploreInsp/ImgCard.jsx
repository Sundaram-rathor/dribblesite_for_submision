import React,{useState} from 'react'
import { FaEye } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";

function ImgCard({info}) {

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleOpenOverlay = () => {
    setIsOverlayOpen(true);
  };
  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };


    
  return ( 
    <>
    <div className=' w-[21vw] h-[285px] flex flex-col gap-2 cursor-pointer ' onClick={handleOpenOverlay}>
        <div className='w-full h-[90%]'><img src={info.webformatURL} alt="" className='w-full h-full object-cover rounded-lg shadow-md hover:shadow-[inset_-4px_-26px_20px_10px_#718096]' /></div>
        <div className='w-full h-[10%] flex justify-between'>
            <div>{info.user}</div>
            <div className='flex gap-3'>
                <div><FaThumbsUp/> {info.likes}</div>
                <div><FaEye/> {info.views}</div>
            </div>
        </div>
    </div>
    {isOverlayOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-8 rounded-lg  w-[90vw] mx-4 h-[90vh] bg-[#F8F7F4]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-5xl font-semibold">Design </h2>
              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={handleCloseOverlay}
              >
                ✕
              </button>
            </div>
           <div className='flex h-[90%] gap-5 bg-white bg-[#F8F7F4]'>
           <div className='h-[65%] w-[110%] shadow-lg'>
              <img src={info.webformatURL} alt="" className='rounded-lg h-full w-full ' />
            </div>
            <div  className='flex flex-col gap-5'>
             <div className='text-xl underline underline-offset-2 mb-5'>Description</div>
             <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus unde placeat animi magni itaque dolorem maxime, nulla deleniti pariatur sequi vitae, illum quidem accusamus consectetur reiciendis deserunt odit esse corrupti velit facere est magnam vero dolores accusantium. Incidunt corporis vero adipisci itaque commodi minima id ducimus neque totam culpa! Enim?</div>
             <div>
              <ul>
              <li>User name: {info.user}</li>
              <li>Downloads: {info.downloads}</li>
              <li>Likes: {info.likes}</li>
              </ul>
             </div>
           </div>
           </div>
          </div>
        </div>
      )}
    
    </>
  )
}

export default ImgCard