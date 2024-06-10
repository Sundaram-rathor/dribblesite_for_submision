
import axios from "axios";




export const gettingData = async ()=>{

    try {

      const data = await axios.get(`https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}`)

     
      return data
        
    } catch (error) {
        console.log("error fetching data from api:", error)
    }
}