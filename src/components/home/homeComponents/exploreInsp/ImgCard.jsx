import React from 'react'
import {ViewIcon,ArrowUpIcon} from '@chakra-ui/icons'

function ImgCard({info}) {

    
  return ( 
    <div className=' w-[21vw] h-[285px] flex flex-col gap-2 cursor-pointer '>
        <div className='w-full h-[90%]'><img src={info.webformatURL} alt="" className='w-full h-full object-cover rounded-lg shadow-md hover:shadow-[inset_-4px_-26px_20px_10px_#718096]' /></div>
        <div className='w-full h-[10%] flex justify-between'>
            <div>{info.user}</div>
            <div className='flex gap-3'>
                <div><ArrowUpIcon/> {info.likes}</div>
                <div><ViewIcon/> {info.views}</div>
            </div>
        </div>
    </div>
  )
}

export default ImgCard