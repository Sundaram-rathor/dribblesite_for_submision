import React,{useEffect,useState} from 'react'
import ImgCard from './ImgCard'
import { gettingData } from '../../../../utils/data.js'




function ExploreInspiringDesign() {

 
  const[data , setData] = useState([])
    useEffect(()=>{
        const fetchData= async ()=>{
            const info = await gettingData();

            setData(info.data.hits)
        }
        fetchData();
    },[])

    console.log(data)

  return (
    <div className=' h-auto overflow-hidden'>
    <div className=' w-full flex justify-center mt-10 '>


                        <div className='text-5xl py-20 px-8'>Explore inspiring designs</div>

    </div>
     

     <div >
      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-4  gap-10 px-4 py-5 '>
            {data.map((item)=>{
               return  <ImgCard info={item} key={item.id} />
            })}
            </div>



            
        
        
        </div>
     </div>
    </div>
  )
}

export default ExploreInspiringDesign