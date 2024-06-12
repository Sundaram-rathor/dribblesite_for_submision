import React from 'react'

function Jobs() {
  return (
    <div>
      <div className='flex justify-center items-center  gap-5 h-[63%]'>
            <div className='flex items-center flex-col justify-center gap-6 mt-36 mb-32'>
                

                  
                  <div className='flex flex-col items-center text-7xl '>
                    <div>The #1 job board for</div>  
                    <div>graphic design jobs</div>
                  </div>
                  <div className='text-lg flex flex-col justify-center items-center'>
                 <span> Dribbble is the heart of the design community and the best resource to discover</span> 
                 <span> and connect with designers and jobs worldwide.</span>
      
                  </div>
                  <div className='bg-[#0D0C22] text-lg py-4 px-4 rounded-full mt-5 text-white'>
                      <button>+Post a job</button>
                  </div>
            </div>
        </div>

    </div>
  )
}

export default Jobs